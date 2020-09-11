import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./routes/aboutPage";
import Login from "./Components/Login/Login";
import ProjectsPage from "./routes/projectsPage";
import Voting from "./Components/Voting/Voting";
import SignUps from "./Components/SignUps/SignUps";
import STORE from "./STORE";
import { GlobalContext } from "./Context/GlobalContext";
import NotFound from "./routes/notFoundPage";

export default function App() {
  const [hasError, setHasError] = useState("");
  const { projects, setProjects } = useContext(GlobalContext);

  useEffect(() => {
    setProjects(STORE.projects);
  }, []);

  return (
    <React.Fragment>
      <main className="main">
        {hasError && <p className="red">There was an error</p>}
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/projects" component={ProjectsPage} />
          {/* <Route
            exact
            path="/projects/:project_id"
            component={(routeProps) => (
              <ProjectDetails
                project={projects.find(
                  (project) => project.project_id === Number(routeProps.match.params.project_id)
                )}
              />
            )}
          /> */}
          <Route exact path="/voting" component={Voting} />
          <Route exact path="/signups" component={SignUps} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
