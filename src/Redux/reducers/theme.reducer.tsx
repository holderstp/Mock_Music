import { actionTypes } from "../types/actions.types";

interface UserAction {
  payload?: string | any;
  type: string;
}

const themeReducer = (state = { currentTheme: "blue" }, action: UserAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return { ...state, currentTheme: action.payload };
    default:
      return state;
  }
};
export default themeReducer;
