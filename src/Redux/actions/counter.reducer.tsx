import { actionTypes } from "../types/actions.types";

const initState: any = {
  countA: 1,
  countB: 0,
  total: 1,
};

interface actionProps {
  type?: string;
  payload?: any;
}

const counterReducer = (state = initState, action: actionProps) => {
  console.log("counterReducer");
  console.log("counterReducerAction", action);
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER_A:
      return {
        ...state,
        countA: (state.countA += action.payload.number),
        total: state.countA + state.countB,
      };
    case actionTypes.INCREASE_COUNTER_B:
      return {
        ...state,
        countB: (state.countB += action.payload.number),
        total: state.countA + state.countB,
      };

    default:
      return state;
  }
};

export default counterReducer;
