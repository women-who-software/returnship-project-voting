import React, { createContext, useReducer } from "react";
import ProjectsReducer from "./ProjectsReducer";
import SearchReducer from "./SearchReducer";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [projects, dispatchProjects] = useReducer(ProjectsReducer, []);
  const [search, dispatchSearch] = useReducer(SearchReducer, []);

  const setProjects = (projects) => {
    dispatchProjects({
      type: "SET_PROJECTS",
      payload: projects,
    });
  };

  const setSearch = (project) => {
    dispatchSearch({
      type: "SET_SEARCH",
      payload: project,
    });
  };


  return (
    <GlobalContext.Provider
      value={{
        projects: projects,
        setProjects,
        search: search,
        setSearch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
