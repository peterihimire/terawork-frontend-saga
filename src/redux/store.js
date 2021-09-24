import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./sagas/index";

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, {}, composeWithDevTools());

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
// composeWithDevTools(),
// {},
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// compose(window.devToolsExtension && window.devToolsExtension())
