import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Projects from "./Components/Projects/Projects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Voting from "./Components/Voting/Voting";
import SignUps from "./Components/SignUps/SignUps";
import STORE from "./STORE";
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
<<<<<<< HEAD
        {hasError && <p className="red">There was an error</p>}
=======
        {hasError && <p className="red">There was an error}</p>}
>>>>>>> 14c0f891d257ae42971f616ea9ba23eb467bbc7e
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/projects" component={() => <Projects projects={projects} />} />
          <Route
            exact
            path="/projects/:project_id"
            component={(routeProps) => (
              <ProjectDetails
                project={projects.find(
                  (project) => project.project_id === Number(routeProps.match.params.project_id)
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
