import {
  ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  ALERTA_LIMPIAR
} from '../acciones/constantes';

export default (state = {}, action) => {
  switch (action.type) {
    case ALERTA_SATISFACTORIA:
      return {
        tipo: 'alert-success',
        mensaje: action.mensaje,
        color: action.color
      };
    case ALERTA_ERROR:
      return {
        tipo: 'alert-danger',
        mensaje: action.mensaje,
        color: action.color
      };
    case ALERTA_LIMPIAR:
      return {};
    default:
      return state;
  }
};
