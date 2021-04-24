// Import React Components
import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";

// Temporary Data
import STORE from "./STORE";

// State Management
import { GlobalContext } from "./Context/GlobalContext";

// Import Custom Components
import Header from "./Components/User/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Routes/User/AboutPage";
import ProjectsPage from "./Routes/User/ProjectsPage";
import NotFoundPage from "./Routes/NotFoundPage";
import AdminPanel from "./Components/Admin/AdminPanel/AdminPanel";
import AdminProjectDetails from "./Components/Admin/AdminProjectDetails/AdminProjectDetails";

export default function App() {
  const [hasError, setHasError] = useState("");
  const { projects, setProjects } = useContext(GlobalContext);

  useEffect(() => {
    setProjects(STORE.Project);
  }, []);

  return (
    <main>
      <Header />

      <div>
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
          <Route component={NotFoundPage} />
        </Switch>
      </div>

      <Footer />
    </main>
  );
}
