import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import summaryReducer from './ducks/summary';
import regionReducer from './ducks/regions';
import appDataReducer from './ducks/info';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducers = combineReducers({
  summaries: summaryReducer,
  regionSummaries: regionReducer,
  appData: appDataReducer,
});

const store = createStore(reducers, enhancer);

export default store;
