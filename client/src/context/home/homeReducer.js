import { GET_HOMES, CLEAR_FILTER, HOME_ERROR } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_HOMES:
      return {
        ...state,
        homes: action.payload.data,
        pages: action.payload.pages,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        homes: [],
        error: '',
      };
    case HOME_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
