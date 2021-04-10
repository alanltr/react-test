import {
  SET_TOTAL_ITEMS,
  TOGGLE_IS_OPEN_SELECT_ITEMS,
  SET_NB_PER_PAGE,
} from 'src/actions/paginationActions';

const initialState = {
  nbItemsPerPage: 8,
  totalItems: 0,
  isOpenSelect: false,
};

function cardsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.number,
      };
    case SET_NB_PER_PAGE:
      return {
        ...state,
        nbItemsPerPage: action.number,
      };
    case TOGGLE_IS_OPEN_SELECT_ITEMS:
      return {
        ...state,
        isOpenSelect: !state.isOpenSelect,
      };
    default:
      return state;
  }
}

export default cardsReducer;
