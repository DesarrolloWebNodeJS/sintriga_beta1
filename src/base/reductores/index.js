import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import opciones from './opciones';
// import errores from './errores';
import alertaReductor from './alerta.Reductor';
import seriesReductor from './series.Reductor';

export default combineReducers({
  rutas: routerReducer,
  alerta: alertaReductor,
  series: seriesReductor
});
