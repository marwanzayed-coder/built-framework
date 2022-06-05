import { length } from "./length";
export const join = (array, regExp) => {
  let arr = "";
  for (let i = 0; i < length(array); i++) {
    if (regExp === undefined) {
      arr += array[i];
    } else {
      arr += array[i] + regExp;
    }
  }
  return arr;
};
