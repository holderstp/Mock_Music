import { actionTypes } from "../types/actions.types";

export function increaseCountA(value: number) {
  console.log("increaseCountA");
  return { type: actionTypes.INCREASE_COUNTER_A, payload: { number: value } };
}
export function increaseCountB(value: number) {
  console.log("increaseCountB");
  return { type: actionTypes.INCREASE_COUNTER_B, payload: { number: value } };
}
