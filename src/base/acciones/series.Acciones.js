import {
  ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  // ALERTA_ADVERTENCIA,
  // ALERTA_INFO,
  ALERTA_LIMPIAR,
  CAT_SERIES_SOLICITA,
  CAT_SERIES_RECIBE,
  CAT_SERIES_ERROR,
  CAT_SERIES_NUEVO,
  CAT_SERIES_AGREGA
} from './constantes';

export const _cmdgetSeries = () => {
  return (dispatch, getState, apiSeries) => {
    const seriesApp = getState().series.catSeries;
    // const version = getState().estado.catEstado.appVersion;
    dispatch({
      type: CAT_SERIES_SOLICITA
    });
    dispatch({
      type: ALERTA_LIMPIAR
    });
    if (seriesApp.length === 0) {
    apiSeries
      .get('/api/cat_series')
      .then(response => {
        dispatch({
          type: CAT_SERIES_RECIBE,
          payload: response.data
        });
        dispatch({
          type: ALERTA_SATISFACTORIA, payload: 'Series cargadas correctamente'
        });
      })
      .catch(() => {
        dispatch({ type: ALERTA_ERROR, codigo: 4520});
        dispatch({ type: CAT_SERIES_ERROR });
      });
    } else {
      dispatch({
        type: CAT_SERIES_RECIBE,
        payload: seriesApp
      });
      dispatch({
        type: ALERTA_SATISFACTORIA, payload: 'Series cargadas correctamente'
      });
    }
  };
};

export const _cmdmostrarNuevo = () => {
  return { type: CAT_SERIES_NUEVO };
};

export const _cmdpostSeries = item => {
  return (dispatch, getState, api) => {
    api
      .post('/api/notes', item)
      .then(() => {
        dispatch({
          type: CAT_SERIES_AGREGA,
          payload: item
        });
        dispatch({
          type: ALERTA_SATISFACTORIA, mensaje: 'Serie agregada correctamente.'
        });
      })
      .catch(() => {
        dispatch({ type: ALERTA_ERROR, codigo: 4520});
        dispatch({ type: CAT_SERIES_ERROR });
      });
      dispatch({
        type: CAT_SERIES_SOLICITA
      });
      dispatch({
        type: ALERTA_LIMPIAR
      });
  };
};
