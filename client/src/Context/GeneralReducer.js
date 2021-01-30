export default (state, action) => {
  switch (action.type) {
    case "SET_API_MESSAGE":
      return action.payload;

    default:
      return state;
  }
};