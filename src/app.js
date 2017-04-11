'use strict';

const { app, BrowserWindow } = require('electron'),
      path = require('path'),
      url = require('url'),
      nunjucks = require('nunjucks');

let $ = require('jquery'),
    win;

function createWindow() {
   win = new BrowserWindow({ width: 800, height: 600, show: false });
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
   }));

   win.once('ready-to-show', () => {
      win.show();
   });

   win.on('closed', () => {
      win = null;
   });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', () => {
   if (win === null) {
      createWindow();
   }
});
