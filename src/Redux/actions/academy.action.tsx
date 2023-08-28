import { actionTypes } from "../types/actions.types";

export function swapAcademyAddress() {
  return { type: actionTypes.SWAP_ACADEMY_ADDRESS };
}
export function changeAcademyName(newName: string) {
  return { type: actionTypes.CHANGE_ACADEMY_NAME, payload: newName };
}
