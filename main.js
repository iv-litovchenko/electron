// sudo npm install -g electron // установка глобально
// npm install electron -save // установка для проекта
// electron . // запуск электрона
// npm run start
// npm run build
// npm install electron-packager --save-dev
// npm install electron-packager -g # for use from cli

// npm run start

// electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
// electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds

const path = require('path'); // библиотека обрабатывает пути
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 700, 
		height: 500,
        icon: __dirname + '/assets/icons/png/logo.png'
	})

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
	
	// win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	})
}

app.on('ready', createWindow);
app.on('window-all-closed', ()  => {
	app.quit();
});