import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Context 
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalContext";

// SASS styling
import "./scss/styles.scss";

// Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
