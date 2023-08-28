import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "../actions/counter.reducer";
import academyReducer from "../reducers/academy.reducer";
import themeReducer from "../reducers/theme.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import userReducer from "../reducers/user.reducer";
import { configureStore } from "@reduxjs/toolkit";

const allReducer = combineReducers({
  counterReducer,
  academyReducer,
  themeReducer,
  user: userReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export { store };
