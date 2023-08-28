import { actionTypes } from "../types/actions.types";
import { takeLatest } from "redux-saga/effects";
import fetchUser from "./user.saga";

function* rootSaga() {
  yield takeLatest(actionTypes.USER_FETCH_REQUEST, fetchUser);
}

//takeLatest
//takeEvery
//take

export default rootSaga;
