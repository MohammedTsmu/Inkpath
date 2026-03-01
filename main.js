/* ============================================================
   Inkpath — Electron Main Process
   ============================================================ */

const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const pkg = require('./package.json');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 850,
        minWidth: 800,
        minHeight: 600,
        title: 'Inkpath',
        icon: path.join(__dirname, 'assets', 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            spellcheck: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile('index.html');

    // Build menu
    const menuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Print Template',
                    accelerator: 'CmdOrCtrl+P',
                    click: () => {
                        mainWindow.webContents.print({
                            silent: false,
                            printBackground: true,
                            margins: { marginType: 'custom', top: 0.3, bottom: 0.3, left: 0.3, right: 0.3 }
                        });
                    }
                },
                {
                    label: 'Export as PDF',
                    accelerator: 'CmdOrCtrl+Shift+S',
                    click: () => {
                        mainWindow.webContents.send('trigger-pdf-export');
                    }
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => app.quit()
                }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { type: 'separator' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { role: 'resetZoom' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About Inkpath',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: 'About Inkpath',
                            message: 'Inkpath',
                            detail: `Print your path to productivity.\nTake control of your time, on paper.\n\nVersion ${pkg.version}`
                        });
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

// ─── IPC: Export PDF ────────────────────────────────────────
ipcMain.handle('export-pdf', async (event, options) => {
    const { filename, landscape, pageSize, printBackground } = options;

    const result = await dialog.showSaveDialog(mainWindow, {
        title: 'Save PDF',
        defaultPath: path.join(app.getPath('documents'), filename),
        filters: [{ name: 'PDF Files', extensions: ['pdf'] }]
    });

    if (result.canceled || !result.filePath) {
        return { success: false, canceled: true };
    }

    try {
        const pdfData = await mainWindow.webContents.printToPDF({
            landscape: landscape || false,
            pageSize: pageSize || 'A4',
            printBackground: printBackground !== false,
            margins: { marginType: 'custom', top: 0.3, bottom: 0.3, left: 0.3, right: 0.3 }
        });

        fs.writeFileSync(result.filePath, pdfData);
        return { success: true, filePath: result.filePath };
    } catch (err) {
        console.error('PDF export error:', err);
        return { success: false, error: err.message };
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
