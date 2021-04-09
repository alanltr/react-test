import {
  SAVE_MOVIES,
  SAVE_CATEGORIES,
  TOGGLE_IS_OPEN_SELECT,
  SET_SELECTED_CATEGORY,
} from 'src/actions/cardsActions';

const initialState = {
  movies: [],
  categories: [],
  isOpenSelect: false,
  selectedCategory: ' ',
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
    case TOGGLE_IS_OPEN_SELECT:
      return {
        ...state,
        isOpenSelect: !state.isOpenSelect,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.value,
      };
    default:
      return state;
  }
}

export default cardsReducer;
