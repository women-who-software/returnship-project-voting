export default (state, action) => {
  switch (action.type) {
    case "SET_VOTES":
      return action.payload;

    case "ADD_VOTE":
      return [...state, action.payload];

    case "DELETE_VOTE":
      return state;

    case "UPDATE_VOTE":
      return state;

    default:
      return state;
  }
};