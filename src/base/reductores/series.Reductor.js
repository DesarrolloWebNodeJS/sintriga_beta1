import {
  CAT_SERIES_SOLICITA,
  CAT_SERIES_RECIBE,
  CAT_SERIES_AGREGA,
  CAT_SERIES_ERROR
} from '../acciones/constantes';

const initialState = {
  catSeries: [],
  estaCargando: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAT_SERIES_SOLICITA:
      return {
        ...state,
        estaCargando: true
      };
    case CAT_SERIES_RECIBE:
      return {
        ...state,
        estaCargando: false,
        catSeries: [...action.payload]
      };
    case CAT_SERIES_AGREGA:
      return {
        ...state,
        catSeries: [...state.catSeries, action.payload],
        estaCargando: false
      };
    case CAT_SERIES_ERROR:
      return {
        ...state,
        estaCargando: false
      };
    default:
      return state;
  }
};
