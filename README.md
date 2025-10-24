# 🤖 AI Markdown Generator

A sleek desktop application for Ubuntu 25.04 that transforms your plain text into beautifully formatted Markdown using Google's Gemini 2.5 Flash AI.

## ✨ Features

🎯 **Simple Interface** - Clean, minimal design with just one button and a textarea  
🚀 **AI-Powered** - Leverages Gemini 2.5 Flash for intelligent markdown formatting  
✏️ **Editable Output** - Generated markdown can be edited directly in the app  
⚡ **Fast Processing** - Quick API responses for seamless user experience  
🐧 **Ubuntu Optimized** - Built specifically for Ubuntu 25.04

## 🛠️ Tech Stack

📦 **Frontend Framework** - Electron or Tauri for cross-platform desktop app  
🎨 **UI Library** - HTML/CSS/JavaScript with modern styling  
🔗 **API Integration** - Google Gemini 2.5 Flash API  
🖥️ **Target Platform** - Ubuntu 25.04 LTS

## 🚀 Getting Started

### Prerequisites

🔧 **Node.js** - Version 18 or higher  
🔑 **Gemini API Key** - Get yours from Google AI Studio  
🐧 **Ubuntu 25.04** - Primary target platform

### Installation

```bash
# Clone the repository
git clone https://github.com/RyanMaxiemus/genny-the-ai-markdown-generator.git

# Navigate to project directory
cd genny-the-ai-markdown-generator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Gemini API key to .env file

# Start the application
npm start
```

## 🎮 How to Use

1️⃣ **Input Text** - Type or paste your content into the textarea  
2️⃣ **Generate** - Click the "Generate Markdown" button  
3️⃣ **Review** - AI-formatted markdown appears in the output area  
4️⃣ **Edit** - Make any adjustments to the generated markdown  
5️⃣ **Export** - Copy or save your formatted content

## 🏗️ Project Structure

```text
genny-the-ai-markdown-generator/
├── 📁 assets/
│   ├── 📁 icons/
│   │   └── 📄 icon.png         # Application icon
|   ├── 📁 styles/
│   │   └── 📄 styles.css       # Application styling
├── 📁 src/
│   ├── 📁 utils/
│   │   └── 📄 api.js       # Gemini API integration
│   ├── 📄 renderer.js      # UI logic and API calls
│   └── 📄 styles.css       # Application styling
├── 📄 .env                 # Environment variables
├── 📄 .env.example         # Environment variables template
├── 📄 .gitignore           # Git ignore file
├── 📄 LICENSE              # License file
├── 📄 main.js              # Main application entry
├── 📄 package-lock.json    # Dependencies lock file
├── 📄 package.json         # Dependencies and scripts
└── 📄 README.md            # This file
```

## ⚙️ Configuration

🔐 **API Setup** - Add your Gemini API key to the `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

🎛️ **App Settings** - Customize the AI instructions for markdown formatting in the configuration file

## 🤝 Contributing

🐛 **Bug Reports** - Open an issue with detailed reproduction steps  
💡 **Feature Requests** - Suggest new features via GitHub issues  
🔧 **Pull Requests** - Fork, create a feature branch, and submit a PR  
📖 **Documentation** - Help improve docs and examples

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

🤖 **Google Gemini** - For providing the AI capabilities  
🔗 **Electron** - For the cross-platform desktop app framework  
🐧 **Ubuntu Community** - For the amazing Linux distribution  
💻 **Open Source** - Built with love for the open source community

## 📞 Support

🐛 **Issues** - Report bugs on GitHub Issues  
💬 **Discussions** - Join conversations in GitHub Discussions  
📧 **Contact** - Reach out via email for urgent matters

---

Made with ❤️ for Ubuntu users who love markdown
