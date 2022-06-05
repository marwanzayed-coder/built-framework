export const length = (string) => {
  let index = 0;
  while (string[index] !== undefined) index++;
  return index;
};
