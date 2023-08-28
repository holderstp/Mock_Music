import { actionTypes } from "../types/actions.types";

interface UserAction {
  payload?: string | any;
  type: string | any;
}
const userReducer = (state: any = {}, action: UserAction) => {
  switch (action.type) {
    case actionTypes.USER_FETCH_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default userReducer;
