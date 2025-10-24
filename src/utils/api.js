// Using fetch API
async function callGeminiAPI(task, content) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY not found in environment variables');
  }

  const url = `https://generativelanguage.googleapis.com/viberta/models/gemini-2.5-flash-latest:generateContent?key=$(apiKey)`;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `${task}\n\nContent to process:\n${content}`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
