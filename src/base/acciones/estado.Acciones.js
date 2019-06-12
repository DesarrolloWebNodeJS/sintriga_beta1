import {
  ALERTA_INFO,
  ALERTA_ERROR,
  ALERTA_LIMPIAR,
  ESTADO_RECIBE
} from './constantes';

export const _cmdgetEstado = idComponente => {
  return (dispatch, getState, apiSeries) => {
    apiSeries
      .get('/es')
      .then(response => {
        dispatch({
          type: ESTADO_RECIBE,
          payload: response.data
        });
        dispatch({
          type: ALERTA_INFO, payload: 'Versión ' + response.data.appVersion
        });
      })
      .catch(error => {
        if (error.response) {
          dispatch({
            type: ALERTA_ERROR,
            payload: error.response.data.error.message
          });
        } else if (error.request) {
          dispatch({
            type: ALERTA_ERROR,
            payload: error.message + ' 45' + idComponente
          });
        } else {
          console.log(error.message);
        }
      });
      dispatch({
        type: ALERTA_LIMPIAR
      });
  };
};
