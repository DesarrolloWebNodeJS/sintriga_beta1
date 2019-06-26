import React from 'react';
import { render } from 'react-dom';
import App from './contenedores/Rutas';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import Rutas from './contenedores/Rutas';
import configurarBase from './base';
import './sintriga.css';
// TODO: Verifcar Service workers
// import * as serviceWorker from './serviceWorker';
import * as serviceWorker from './sw1';

const store = configurarBase();

console.log('====================================');
console.log('> BETA.ini');
render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('sintriga')
);
serviceWorker.register();
console.log('> BETA.fin');
console.log('====================================');
