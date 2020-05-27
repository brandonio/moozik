import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Container from "./components/container";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Navbar />
      <Container />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
