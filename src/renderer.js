// Theme: apply saved or system preference
const THEME_KEY = 'genny-theme';

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  applyTheme(getPreferredTheme());
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next =
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
}

// Initialize the app (API is exposed via preload: window.api.generateMarkdown)
function initializeApp() {
  initTheme();

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
    generateBtn.classList.add('is-loading');
    markdownOutput.value = 'Generating markdown…';

    try {
      if (!window.api?.generateMarkdown) {
        throw new Error('API not available. Run the app with Electron.');
      }
      const response = await window.api.generateMarkdown(prompt);
      markdownOutput.value = response;
    } catch (error) {
      console.error('Error generating content:', error);
      markdownOutput.value = `Error generating content: ${error.message}\n\nPlease check your API key and try again.`;
    } finally {
      generateBtn.disabled = false;
      generateBtn.classList.remove('is-loading');
    }
  });

  // Ctrl+Enter to trigger generation
  promptInput.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
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
