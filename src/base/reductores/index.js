import { combineReducers } from 'redux';
import ingresoReductor from './ingreso.Reductor';
import alertaReductor from './alerta.Reductor';
import estadoReductor from './estado.Reductor';
import seriesReductor from './series.Reductor';
import opcionesReductor from './opciones.Reductor';

export default combineReducers({
  ingreso: ingresoReductor,
  alerta: alertaReductor,
  estado: estadoReductor,
  series: seriesReductor,
  opciones: opcionesReductor
});
