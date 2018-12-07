// import axios from "axios";
// import { _error } from './alerta';
export const CATMOTOR_SOLICITA = 'inventario/CATMOTOR_SOLICITA';
export const CATMOTOR_NUEVO = 'inventario/CATMOTOR_NUEVO';
export const CATMOTOR_RECIBE = 'inventario/CATMOTOR_RECIBE';
export const CATMOTOR_ERROR = 'inventario/CATMOTOR_ERROR';

const initialState = {
  catMotor: [],
  estaCargando: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATMOTOR_SOLICITA:
      return {
        ...state,
        estaCargando: true
      };
    case CATMOTOR_NUEVO:
      return {
        ...state,
        catMotor: [...state.catMotor, action.payload],
        estaCargando: false
      };
    case CATMOTOR_RECIBE:
      return {
        ...state,
        estaCargando: false,
        catMotor: [...action.payload]
      };
    case CATMOTOR_ERROR:
      return {
        ...state,
        estaCargando: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export const _traerProducto = () => {
  return (dispatch, getState, api) => {
    // const aux = getState().inventario;
    // console.log("====================================");
    // console.log(aux);
    // console.log("====================================");
    api
      .get('/cat_otros')
      .then(response => {
        dispatch({
          type: CATMOTOR_RECIBE,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({ type: CATMOTOR_ERROR, payload: error.message });
      });
    dispatch({
      type: CATMOTOR_SOLICITA
    });
    // console.log("current state: _traerProducto  ", getState());
  };
};

export const _nuevoProducto = item => {
  return (dispatch, api) => {
    // console.log('current state:', getState());
    api
      .post('/cat_otros', item)
      .then(response => {
        dispatch({
          type: CATMOTOR_NUEVO,
          payload: item,
          mensaje: {
            statusCode: response.status,
            message: response.statusText
          }
        });
      })
      .catch(error => {
        dispatch({ type: CATMOTOR_ERROR, payload: error.message });
      });
    dispatch({
      type: CATMOTOR_SOLICITA
    });
  };
};

/* export const addName = (newName, contestId) => {
  return axios.post('/api/names', { newName, contestId })
  .then(resp => resp.data);
};
  getItems:()=> dispatch({type:GET_ITEMS})
  addItem:(item)=> dispatch({type: ADD_ITEM, payload: item })
  deleteItem: id => dispatch({ type: DELETE_ITEM, payload: id })

*/
