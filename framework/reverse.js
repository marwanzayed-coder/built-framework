import { length } from "./length";

export const reverse = (string) => {
  let reversed = "";
  for (let i = length(string) - 1; i >= 0; i--) reversed += string[i];
  return reversed;
};
