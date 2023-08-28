import { Action } from "redux";
import { call, put } from "redux-saga/effects";
import { actionTypes } from "../types/actions.types";

const USER_API: string = "https://jsonplaceholder.typicode.com/users/1";
function* fetchUser(action: Action): any {
  try {
    const response = yield call(fetch, USER_API);
    const data = yield response.json();
    yield put({ type: actionTypes.USER_FETCH_SUCCESS, payload: data });
  } catch (error: any) {
    yield put({ type: actionTypes.USER_FETCH_FAILED, message: error.message });
  }
}

export default fetchUser;
