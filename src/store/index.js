import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/index';

const enhancers = composeWithDevTools(
  applyMiddleware(

  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
