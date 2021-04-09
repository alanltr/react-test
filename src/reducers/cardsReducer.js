import { SAVE_MOVIES } from 'src/actions/cardsActions';

const initialState = {
  movies: [],
};

function cardsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    default:
      return state;
  }
}

export default cardsReducer;
