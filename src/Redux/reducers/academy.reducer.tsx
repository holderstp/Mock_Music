import { actionTypes } from "../types/actions.types";

const initState: any = {
  name: "FSOFT ACADEMY",
  address: [
    { street: "Duy Tan", ward: "Cau Giay", number: 17, city: "Ha Noi" },
    { street: "Hoa Lac", ward: "Quoc Oai", number: 111, city: "Ha Noi" },
  ],
};
interface actionProps {
  payload?: string | any;
  type: string | any;
}

const academyReducer = (state = initState, action: actionProps) => {
  switch (action.type) {
    case actionTypes.SWAP_ACADEMY_ADDRESS:
      return {
        ...state,
        address: state.address.reverse(),
      };
    case actionTypes.CHANGE_ACADEMY_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default academyReducer;
