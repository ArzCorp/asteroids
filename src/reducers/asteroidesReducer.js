import { TRAER_ASTEROIDES, CARGANDO, ERROR } from '../types/asteroidesTypes';

const INITIAL_STATE = {
  getNeos: [],
  cargando: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_ASTEROIDES:
      return { ...state,
        getNeos: action.payload,
        cargando: false };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default: return state;
  }
}