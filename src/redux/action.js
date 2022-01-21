export const Increment = (data) => {
  return {
    type: "Increment",
    data,
  };
};
export const decrement = (data) => {
  return {
    type: "Decrement",
    data,
  };
};
export const resetNumber = (data) => {
  return {
    type: "resetNumber",
    data,
  };
};
