import { length } from "./length";

export const push = (array, ...ele) => {
  let arr = array;
  let count = length(array);
  for (let i = 0; i < length(ele); i++) {
    arr[count++] = ele[i];
  }
  return arr;
};
