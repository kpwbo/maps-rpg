/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true });

const installExtension = require('electron-devtools-installer');

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Unable to install `vue-devtools`: \n', err);
    });
});

// Require `main` process to boot app
require('./electron-main');
