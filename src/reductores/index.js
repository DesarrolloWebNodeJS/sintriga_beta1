import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contador from './counter';


export default combineReducers({
  rutas: routerReducer,
  contador
});
