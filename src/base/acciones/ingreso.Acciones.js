import {
  ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  // ALERTA_ADVERTENCIA,
  // ALERTA_INFO,
  ALERTA_LIMPIAR,
  SISTEMA_INGRESAR,
  SISTEMA_SALIR
} from './constantes';

export const _cmdSistemaIngresar = item => {
  return (dispatch, getState, apiSeries) => {
    apiSeries
      .post('/api/cat_usuarios/login', item)
      .then(response => {
        localStorage.setItem('user', item.email);
        localStorage.setItem('token', response.data.id);
        localStorage.setItem('userId', response.data.userId);
        dispatch({
          type: SISTEMA_INGRESAR
        });
        dispatch({
          type: ALERTA_SATISFACTORIA,
          mensaje: 'ingreso correcto cód. ' + response.status
        });
      })
      .catch(() => {
        dispatch({
          type: ALERTA_ERROR,
          codigo: 'ingrese los datos correctamente'
        });
      });
    dispatch({
      type: ALERTA_LIMPIAR
    });
  };
};
export const _cmdSistemaSalir = () => {
  return (dispatch, getState, apiSeries) => {
    apiSeries
      .get('/es')
      .then(response => {
        dispatch({
          type: SISTEMA_SALIR,
          payload: response.data
        });
        dispatch({
          type: ALERTA_SATISFACTORIA,
          mensaje: ''
        });
      })
      .catch(error => {
        dispatch({ type: ALERTA_ERROR, codigo: error.message + ' 45' });
      });
    dispatch({
      type: ALERTA_LIMPIAR
    });
  };
};
