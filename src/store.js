import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'reducer';

const middlewares = [
  createSagaMiddleware(),
];

const store = createStore(
  reducer,
  Immutable.fromJS({}),
  applyMiddleware(...middlewares),
);

export default store;