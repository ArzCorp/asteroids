import { TRAER_ASTEROIDES, CARGANDO, ERROR, UPDATE_PAGE } from '../types/asteroidesTypes';

const INITIAL_STATE = {
  getNeos: [],
  cargando: false,
  error: '',
  page: 9,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_ASTEROIDES:
      return {
        ...state,
        getNeos: action.payload,
        cargando: false
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    case UPDATE_PAGE:
      return { ...state, page: action.payload };
    default: return state;
  }
}