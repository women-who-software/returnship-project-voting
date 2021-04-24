import React, { createContext, useReducer } from "react";
import ProjectsReducer from "./ProjectsReducer";
import SearchReducer from "./SearchReducer";
import AdminReducer from './AdminReducer';

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [projects, dispatchProjects] = useReducer(ProjectsReducer, []);
  const [search, dispatchSearch] = useReducer(SearchReducer, []);
  const [isAdmin, dispatchAdmin] = useReducer(AdminReducer, true);

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

  const setAdmin = () => {
    dispatchAdmin({
      type: 'SET_ADMIN',
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        projects: projects,
        setProjects,
        search: search,
        setSearch,
        isAdmin: isAdmin,
        setAdmin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
