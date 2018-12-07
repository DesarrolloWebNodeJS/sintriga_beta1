import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import opciones from './opciones';
// import errores from './errores';
import alertaReductor from './alerta.Reductor';

export default combineReducers({
  rutas: routerReducer,
  alerta: alertaReductor
});
