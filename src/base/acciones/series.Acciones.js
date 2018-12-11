import {
  // ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  // ALERTA_ADVERTENCIA,
  // ALERTA_INFO,
  // ALERTA_LIMPIAR,
  CAT_SERIES_SOLICITA,
  CAT_SERIES_RECIBE
} from './constantes';

export const _cmdgetSeries = () => {
  return (dispatch, getState, apiSeries) => {
    apiSeries
      .get('/seed/datatest.json')
      .then(response => {
        dispatch({
          type: CAT_SERIES_RECIBE,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({ type: ALERTA_ERROR, mensaje: error.message });
      });
      dispatch({
        type: CAT_SERIES_SOLICITA
      });
  };
};

// Los colores del alert: success, error, warning, info
/* export const _cmdsatisfactoriaAlerta = mensaje => {
  return { type: ALERTA_SATISFACTORIA, mensaje };
};
export const _cmderrorAlerta = mensaje => {
  return { type: ALERTA_ERROR, mensaje };
};
export const _cmdadvertenciaAlerta = mensaje => {
  return { type: ALERTA_ADVERTENCIA, mensaje };
};
export const _cmdinfoAlerta = mensaje => {
  return { type: ALERTA_INFO, mensaje };
};
export const _cmdlimpioAlerta = () => {
  return { type: ALERTA_LIMPIAR };
}; */
