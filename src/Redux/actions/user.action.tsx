import { actionTypes } from "../types/actions.types";

export function fetUserAction() {
  return { type: actionTypes.USER_FETCH_REQUEST };
}
