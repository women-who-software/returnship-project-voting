import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";

export default function App() {
  const [hasError, setHasError] = useState("");

  return (
    <React.Fragment>
      <main className="App">
        {hasError && <p className="red">There was an error}</p>}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
