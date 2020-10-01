export default (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return action.payload;

    case "ADD_PROJECT":
      return;

    case "DELETE_PROJECT":
      return state;

    case "UPDATE_PROJECT":
      return state;

    default:
      return state;
  }
};
