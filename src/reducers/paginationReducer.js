import { SET_TOTAL_ITEMS } from 'src/actions/paginationActions';

const initialState = {
  nbItemsPerPage: 8,
  totalItems: 0,
};

function cardsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.number,
      };
    default:
      return state;
  }
}

export default cardsReducer;
