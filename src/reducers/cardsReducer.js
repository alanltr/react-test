import { SAVE_MOVIES, SAVE_CATEGORIES } from 'src/actions/cardsActions';

const initialState = {
  movies: [],
  categories: [],
};

function cardsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };
    default:
      return state;
  }
}

export default cardsReducer;
