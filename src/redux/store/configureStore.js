import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

import rootReducer from "../reducers";
import rootSaga from "../middleware";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);

export default store;
