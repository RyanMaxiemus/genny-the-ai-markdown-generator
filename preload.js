const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  generateMarkdown: prompt => ipcRenderer.invoke('generate-markdown', prompt)
});
