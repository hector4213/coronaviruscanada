import { configureStore } from '@reduxjs/toolkit';
import summarySlice from './ducks/summary'; //  rename to slice

export default configureStore({
  reducer: {
    summaries: summarySlice,
  },
});

// import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import regionReducer from './ducks/regions';
// import appDataReducer from './ducks/info';
// import chartReducer from './ducks/chart';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

// const reducers = combineReducers({
//   summaries: summaryReducer,
//   regionSummaries: regionReducer,
//   appData: appDataReducer,
//   chart: chartReducer,
// });

// const store = createStore(reducers, enhancer);

// export default store;
