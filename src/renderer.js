const path = require('path');
const { generateMarkdown } = require(path.join(__dirname, 'src', 'utils', 'api.js'));

// Initialize the app
function initializeApp() {
  const generateBtn = document.getElementById('generateBtn');
  const promptInput = document.getElementById('promptInput');
  const markdownOutput = document.getElementById('markdownOutput');

  if (!generateBtn || !promptInput || !markdownOutput) {
    console.error('Could not find required elements');
    return;
  }

  generateBtn.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';
    markdownOutput.value = 'Generating markdown...';

    try {
      const response = await generateMarkdown(prompt);
      markdownOutput.value = response;
    } catch (error) {
      console.error('Error generating content:', error);
      markdownOutput.value = `Error generating content: ${error.message}\n\nPlease check your API key and try again.`;
    } finally {
      generateBtn.disabled = false;
      generateBtn.textContent = 'Generate';
    }
  });

  // Allow Ctrl+Enter to trigger generation
  promptInput.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'Enter') {
      generateBtn.click();
    }
  });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded
  initializeApp();
}
