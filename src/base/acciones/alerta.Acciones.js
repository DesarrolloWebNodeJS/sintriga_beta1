import {
  ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  ALERTA_LIMPIAR
} from './constantes';

// Los colores del alert: primary, secondary, success, danger, warning, info, light, dark
export const _success = mensaje => {
  return { type: ALERTA_SATISFACTORIA, color: 'success', mensaje };
};
export const _error = mensaje => {
  return { type: ALERTA_ERROR, color: 'danger', mensaje };
};
export const _clear = () => {
  return { type: ALERTA_LIMPIAR };
};
