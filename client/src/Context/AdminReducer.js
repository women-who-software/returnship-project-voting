export default (state, action) => {
    switch (action.type) {
      case "SET_ADMIN":
        return {
          isAdmin: true
        }
  
      default:
        return state;
    }
  };