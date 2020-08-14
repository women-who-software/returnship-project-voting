// Import React Components
import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";

// Import Custom Components
import Landing from "./Components/Landing/Landing";

import AdminPage from "./Components/AdminPage/AdminPage";
import Projects from "./Components/Projects/Projects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Voting from "./Components/Voting/Voting";
import SignUps from "./Components/SignUps/SignUps";
import STORE from "./STORE";
// State Management
import { GlobalContext } from "./Context/GlobalContext";

export default function App() {
  const [hasError, setHasError] = useState("");
  const { projects, setProjects } = useContext(GlobalContext);

  useEffect(() => {
    setProjects(STORE.projects);
  }, []);

  return (
    <React.Fragment>
      <main className="App">
        {hasError && <p className="red">There was an error}</p>}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/admin" component={AdminPage} />
          <Route
            exact
            path="/projects"
            component={() => <Projects projects={projects} />}
          />
          <Route
            exact
            path="/projects/:project_id"
            component={(routeProps) => (
              <ProjectDetails
                project={projects.find(
                  (project) =>
                    project.project_id ===
                    Number(routeProps.match.params.project_id)
                )}
              />
            )}
          />
          <Route exact path="/voting" component={Voting} />
          <Route exact path="/signups" component={SignUps} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
