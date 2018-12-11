import {
  CAT_SERIES_SOLICITA,
  CAT_SERIES_RECIBE,
  CAT_SERIES_AGREGA
} from '../acciones/constantes';

const initialState = {
  catSeries: [],
  estaCargando: false,
  error: ''
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

    default:
      return state;
  }
};
