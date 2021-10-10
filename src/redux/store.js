import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
// import rootReducers from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// const store = createStore(rootReducer, {}, composeWithDevTools());

// const store = compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )(createStore)(rootReducer);

// USED THE COMPOSEWITHDEVTOOLS FROM THE REDUX-DEVTOOLS-EXTENSION
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
export default store;
