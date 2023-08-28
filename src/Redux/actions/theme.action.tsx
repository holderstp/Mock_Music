import { actionTypes } from "../types/actions.types";

export function changeTheme(newTheme: string) {
  return { type: actionTypes.CHANGE_THEME, payload: newTheme };
}
