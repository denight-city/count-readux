const initState = 0;
export default function reducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "Increment":
      return preState + data;
    case "Decrement":
      return preState >= data ? preState - data : preState;
    case "resetNumber":
      return (preState = data);
    default:
      return preState;
  }
}
