import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./routes/aboutPage";
import Login from "./Components/Login/Login";
import ProjectsPage from "./routes/projectsPage";
import STORE from "./STORE";

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
        </Switch>
        <Route path="/" component={Footer} />
      </main>
    </React.Fragment>
  );
}
