require('dotenv').config();

// Using fetch API (Electron has built-in fetch support)
async function callGeminiAPI(task, content, retries = 3) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY not found in environment variables');
  }

  // Use gemini-2.0-flash for fast responses, or gemini-2.5-flash for latest features
  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        parts: [{ text: `${task}\n\nContent to process:\n${content}` }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192
    }
  };

  const timeoutMs = Number(process.env.API_TIMEOUT) || 30000;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        // Log the full error for debugging
        console.log('API Error Response:', errorData);

        // Handle rate limiting with retry
        if (response.status === 429 && attempt < retries) {
          const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff
          console.log(
            `Rate limited. Retrying in ${waitTime}ms... (Attempt ${attempt + 1}/${retries})`
          );
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }

        // Provide more detailed error messages
        let errorMessage = `API Request Failed: ${response.status}`;
        if (response.status === 429) {
          const details = errorData.error?.message || 'Unknown rate limit issue';
          errorMessage = `Rate limit exceeded: ${details}\n\nTry waiting a minute or check your API quota at https://aistudio.google.com/`;
        } else if (response.status === 401) {
          errorMessage =
            'Invalid API key. Please check your GEMINI_API_KEY in .env file.';
        } else if (response.status === 403) {
          errorMessage = 'Access forbidden. Check your API key permissions.';
        } else if (errorData.error?.message) {
          errorMessage += `: ${errorData.error.message}`;
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0]) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('No response generated from Gemini API');
      }
    } catch (error) {
      const isAbort = error.name === 'AbortError';
      if (isAbort) {
        throw new Error(
          `Request timed out after ${timeoutMs / 1000}s. Check your connection or increase API_TIMEOUT in .env.`
        );
      }
      if (attempt === retries) {
        console.error('Error calling Gemini API:', error);
        throw error;
      }
      const waitTime = Math.pow(2, attempt) * 1000;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw new Error('API request failed after retries');
}

// Generate markdown function
async function generateMarkdown(userText) {
  const task =
    'Convert the following text into well-formatted Markdown. Use appropriate headers, lists, emphasis, and other Markdown syntax to improve readability and structure.';

  try {
    const markdownResult = await callGeminiAPI(task, userText);
    return markdownResult;
  } catch (error) {
    console.error('Error generating markdown:', error);
    throw error;
  }
}

module.exports = { callGeminiAPI, generateMarkdown };
