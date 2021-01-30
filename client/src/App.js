// Import React Components
import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import ProjectApiService from "./services/projects-api-service";

// Temporary Data
//import STORE from "./STORE";

// State Management
import { GlobalContext } from "./Context/GlobalContext";
import NotFound from "./routes/notFoundPage";

// Import Custom Components
import AboutPage from "./routes/aboutPage";
import ProjectsPage from "./routes/projectsPage";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AdminProjectDetails from "./Components/AdminProjectDetails/AdminProjectDetails";
export default function App() {
  const [hasError, setHasError] = useState("");
  const { projects, setProjects } = useContext(GlobalContext);

  useEffect(() => {
    //setProjects(STORE.projects);
    ProjectApiService.getAll()
      .then(setProjects)
      .catch((error) => setHasError(error));
  }, []);

  return (
    <React.Fragment>
      <main className="main">
        {hasError && <p className="red">There was an error</p>}
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route
            exact
            path="/admin/projects/:project_id"
            component={(routeProps) => (
              <AdminProjectDetails
                project={projects.find(
                  (project) =>
                    project.project_id ===
                    Number(routeProps.match.params.project_id)
                )}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
