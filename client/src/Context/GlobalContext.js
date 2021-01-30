import React, { createContext, useReducer } from "react";
import ProjectsReducer from "./ProjectsReducer";
import SearchReducer from "./SearchReducer";
import SignupReducer from "./SignupReducer";
import VoteReducer from "./VoteReducer";
import GeneralReducer from './GeneralReducer';

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [projects, dispatchProjects] = useReducer(ProjectsReducer, []);
  const [signup, dispatchSignup] = useReducer(SignupReducer, []);
  const [vote, dispatchVote] = useReducer(VoteReducer, []);
  const [search, dispatchSearch] = useReducer(SearchReducer, []);
  const [apiMessage, dispatchMessage] = useReducer(GeneralReducer, []);

  const setProjects = (projects) => {
    dispatchProjects({
      type: "SET_PROJECTS",
      payload: projects,
    });
  };

  const setApiMessage = (message) => {
    dispatchMessage({
      type: "SET_API_MESSAGE",
      payload: message,
    });
  };

  const setSearch = (project) => {
    dispatchSearch({
      type: "SET_SEARCH",
      payload: project,
    });
  };

  const setSignups = (signups) => {
    dispatchSignup({
      type: "SET_SIGNUPS",
      payload: signups,
    })
  }

  const addSignup = (signup) => {
    dispatchSignup({
      type: "ADD_SIGNUP",
      payload: signup,
    })
  }

  const setVotes = (votes) => {
    dispatchVote({
      type: "SET_VOTES",
      payload: votes,
    })
  }

  const addVote = (vote) => {
    dispatchVote({
      type: "ADD_VOTE",
      payload: vote,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        projects: projects,
        setProjects,
        signup: signup,
        setSignups,
        addSignup,
        vote: vote,
        setVotes,
        addVote,
        search: search,
        setSearch,
        apiMessage: apiMessage,
        setApiMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
