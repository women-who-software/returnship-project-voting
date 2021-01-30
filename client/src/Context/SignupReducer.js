export default (state, action) => {
  switch (action.type) {
    case "SET_SIGNUPS":
      return action.payload;

    case "ADD_SIGNUP":
      return [...state, action.payload];

    case "DELETE_SIGNUP":
      return state;

    case "UPDATE_PSIGNUP":
      return state;

    default:
      return state;
  }
};