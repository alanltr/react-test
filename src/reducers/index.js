import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  pagination: paginationReducer,
});
export default rootReducer;
