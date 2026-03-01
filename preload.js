/* ============================================================
   Inkpath — Electron Preload Script
   Exposes safe IPC bridge to renderer process
   ============================================================ */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    exportPdf: (options) => ipcRenderer.invoke('export-pdf', options),
    onTriggerPdfExport: (callback) => ipcRenderer.on('trigger-pdf-export', callback)
});
