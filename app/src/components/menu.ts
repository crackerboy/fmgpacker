import { Menu, clipboard, shell, MenuItemConstructorOptions } from 'electron';

export function createMenu({clearAppData, reload, showAbout}): void {

  const darwin = process.platform === 'darwin'; // check if system is Mac

  const windowMenu: MenuItemConstructorOptions = {
    label: '&Window',
    role: 'window',
    submenu: [
      {
        label: 'Reload',
        click: reload
      },
      {
        label: 'Clear stored data',
        click: clearAppData
      },
      {
        label: 'Open Downloads folder',
        click: () => electron_1.shell.openExternal(electron_1.app.getPath("downloads")),
        accelerator: 'CmdOrCtrl+J',
      },
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Toggle Full Screen',
        accelerator: darwin ? 'Ctrl+Cmd+F' : 'F11',
        click: (item, focusedWindow) => {if (focusedWindow) focusedWindow.setFullScreen(!focusedWindow.isFullScreen());}
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: darwin ? 'Alt+Cmd+I' : 'Ctrl+Shift+I',
        click: (item, focusedWindow) => {if (focusedWindow) focusedWindow.webContents.toggleDevTools();}
      },
      {
        label: 'Close',
        role: 'close'
      }
    ]
  };
  
  const fmgMenu: MenuItemConstructorOptions = {
    label: '&FMG',
    submenu: [
      {
        label: `Open online version`,
        click: () => electron_1.shell.openExternal('https://azgaar.github.io/Fantasy-Map-Generator/')
      },
      {
        label: 'Go to latest release',
        click: () => electron_1.shell.openExternal('https://github.com/Azgaar/Fantasy-Map-Generator/releases')
      },
      {
        label: 'Report a bug',
        click: () => electron_1.shell.openExternal('https://github.com/Azgaar/Fantasy-Map-Generator/issues')
      },
      {
        label: 'Join Discord server',
        click: () => electron_1.shell.openExternal('https://discordapp.com/invite/X7E84HU')
      },
      {
        label: 'Visit Reddit community',
        click: () => electron_1.shell.openExternal('https://www.reddit.com/r/FantasyMapGenerator')
      },
      {
        label: 'Support on Patreon',
        click: () => electron_1.shell.openExternal('https://www.patreon.com/azgaar')
      },
      {
        label: `About`,
        click: showAbout
      }
    ]
  };

  const menu = Menu.buildFromTemplate([windowMenu, fmgMenu]);
  Menu.setApplicationMenu(menu);
}
