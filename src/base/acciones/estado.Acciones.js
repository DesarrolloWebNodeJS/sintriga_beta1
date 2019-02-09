import {
  ALERTA_INFO,
  ALERTA_ERROR,
  ALERTA_LIMPIAR,
  ESTADO_RECIBE
} from './constantes';

export const _cmdgetEstado = () => {
  return (dispatch, getState, apiSeries) => {
    apiSeries
      .get('/es')
      .then(response => {
        dispatch({
          type: ESTADO_RECIBE,
          payload: response.data
        });
        dispatch({
          type: ALERTA_INFO, mensaje: response.data.appVersion
        });
      })
      .catch(error => {
        dispatch({ type: ALERTA_ERROR, mensaje: error.message });
      });
      dispatch({
        type: ALERTA_LIMPIAR
      });
  };
};
