# 🚀 Genny The Generator

> A sleek desktop application that transforms raw text into polished Markdown for seamless content creation, powered by Gemini 2.0 Flash AI.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Tech: Electron](https://img.shields.io/badge/Tech-Electron-47848F?logo=electron)](https://www.electronjs.org/)
[![Tech: Node.js](https://img.shields.io/badge/Tech-Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![AI: Gemini](https://img.shields.io/badge/AI-Gemini-8E75B2?logo=google-gemini&logoColor=white)](https://ai.google.dev/)

---

## 🧐 What is this?

**Genny The Generator** is a focused, full-stack MVP designed to eliminate the manual effort of formatting content. It addresses the common pain point of converting raw, unformatted text (like meeting notes or draft articles) into clean, structured Markdown ready for publishing. By leveraging the **Gemini 2.0 Flash API**, it intelligently applies headings, lists, and code blocks, offering a fast, minimal desktop experience built with **Electron** and optimized for the **Ubuntu** ecosystem.

## 🛠️ Tech Stack

This project is a single-application desktop client built on the Node.js runtime.

| Component                 | Technology          | Key Libraries/Frameworks           |
| :------------------------ | :------------------ | :--------------------------------- |
| **Frontend**              | HTML/CSS/JavaScript | Vanilla JS, Modern CSS Styling     |
| **Application Framework** | Electron (Node.js)  | Electron (v39.2.1), Node.js        |
| **Core Services**         | AI API              | Google Gemini 2.0 Experimental API |
| **Development**           | Package Manager     | npm                                |

## 🚀 Quick Start

The following instructions are optimized for a Linux environment (Ubuntu/Debian).

### Prerequisites

You must have **Node.js (v18+)** and **npm** installed.

1.  **Clone the repository**

    ```bash
    git clone https://github.com/RyanMaxiemus/genny-the-ai-markdown-generator.git
    cd genny-the-ai-markdown-generator
    ```

2.  **Configure Environment Variables**

    Create a file named `.env` in the root of the project directory by copying the example file, and populate it with your API key.

    ```bash
    cp .env.example .env
    # Open the .env file and add your key:
    # GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    ```

3.  **Install Dependencies**

    Install all necessary Node.js dependencies.

    ```bash
    npm install
    ```

4.  **Run the Application**

    Launch the Electron desktop application.

    ```bash
    npm start
    ```

    The application window will open, ready for you to input text and generate Markdown.

## 📸 Preview

![Genny The Generator Screenshot](./assets/images/genny-the-generator-screenshot.png)

## 🤝 Contributing

Found a bug? Have an idea for a new feature, or a better way to handle the Markdown generation prompt? We welcome all contributions!

1.  **Open an Issue:** Before submitting a Pull Request, please open an issue to discuss the bug or feature you're working on. This helps prevent duplicate work and ensures alignment with the project's goals.
2.  **Fork and Branch:** Fork the repository and create a new branch for your contribution.
3.  **Code and Commit:** Write clean, well-documented code. Commit messages should be descriptive and follow a conventional format (e.g., `feat: add dark mode toggle`).
4.  **Submit a PR:** Submit a Pull Request against the `main` branch. We'll review it as quickly as possible.

Let's make Genny the most efficient Markdown generator available, together.
