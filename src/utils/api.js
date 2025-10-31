require("dotenv").config();
const fetch = require("node-fetch");

// Using fetch API
async function callGeminiAPI(task, content) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found in environment variables");
  }

  const url = `https://generativelanguage.googleapis.com/viberta/models/gemini-2.0-flash-exp:generateContent?key=$(apiKey)`;

  const payload = {
    contents: [
      {
        parts: [{ text: `${task}\n\nContent to process:\n${content}` }],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API Request Failed: $(response.status)`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("No response generated from Gemini API");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}
