import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import opciones from './opciones';
import errores from './errores';

export default combineReducers({
  rutas: routerReducer,
  opciones,
  errores
});
