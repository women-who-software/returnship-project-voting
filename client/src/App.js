// Import React Components
import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";

// Import Custom Components
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./routes/aboutPage";
// import Login from "./Components/Login/Login";
import ProjectsPage from "./routes/projectsPage";
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
      <main className="main">
        {hasError && <p className="red">There was an error</p>}
        <Switch>
          <Route exact path="/" component={AboutPage} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/admin" component={AdminPanel} />
        </Switch>
        {/* <Route path="/" component={Footer} /> */}
      </main>
    </React.Fragment>
  );
}
