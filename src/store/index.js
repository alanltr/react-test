import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import cardsMiddleware from 'src/middlewares/cardsMiddleware';

import reducer from '../reducers/index';

const enhancers = composeWithDevTools(
  applyMiddleware(
    cardsMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
