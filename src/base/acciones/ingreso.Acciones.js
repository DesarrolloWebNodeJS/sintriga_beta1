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
          type: SISTEMA_INGRESAR,
          payload: response.data
        });
        dispatch({
          type: ALERTA_SATISFACTORIA,
          mensaje: 'ingreso correcto cód. ' + response.status
        });
      })
      .catch(error => {
        if (error.response) {
          dispatch({
            type: ALERTA_ERROR,
            payload: error.response.data.error.message
          });
        } else {
          console.log(error);
        }
      });
    dispatch({
      type: ALERTA_LIMPIAR
    });
  };
};

export const _cmdSistemaSalir = () => {
  return (dispatch, getState, apiSeries) => {
    console.log(getState().auth);
    const token = localStorage.getItem('token');
    apiSeries
      .post(`/api/cat_usuarios/logout?access_token=${token}`)
      .then(response => {
        localStorage.clear();
        dispatch({
          type: SISTEMA_SALIR
        });
        dispatch({
          type: ALERTA_SATISFACTORIA,
          mensaje: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ALERTA_ERROR,
          payload: error
        });
      });
    dispatch({
      type: ALERTA_LIMPIAR
    });
  };
};
