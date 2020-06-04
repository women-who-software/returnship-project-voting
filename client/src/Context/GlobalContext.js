import React, { createContext, useReducer } from "react";
import ProjectsReducer from "./ProjectsReducer";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [projects, dispatchProjects] = useReducer(ProjectsReducer, []);

  const setProjects = (projects) => {
    dispatchProjects({
      type: "SET_PROJECTS",
      payload: projects,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        projects: projects,
        setProjects,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
