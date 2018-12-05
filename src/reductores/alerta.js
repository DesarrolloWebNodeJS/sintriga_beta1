export const ALERTA_RECIBE = "alerta/ALERTA_RECIBE";
export const ALERTA_ERROR = "alerta/ALERTA_ERROR";
export const ALERTA_LIMPIO = "alerta/ALERTA_LIMPIO";

export default (state = {}, action) => {
  switch (action.type) {
    case ALERTA_RECIBE:
      return {
        tipo: "alert-success",
        mensaje: action.mensaje,
        color: action.color
      };
    case ALERTA_ERROR:
      return {
        tipo: "alert-danger",
        mensaje: action.mensaje,
        color: action.color
      };
    case ALERTA_LIMPIO:
      return {};
    default:
      return state;
  }
};
// Los colores del alert: primary, secondary, success, danger, warning, info, light, dark
export const _success = mensaje => {
  return { type: ALERTA_RECIBE, color: "success", mensaje };
};
export const _error = mensaje => {
  return { type: ALERTA_ERROR, color: "danger", mensaje };
};
export const _clear = () => {
  return { type: ALERTA_LIMPIO };
};
