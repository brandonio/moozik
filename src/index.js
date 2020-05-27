import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import FloatingButton from "./components/floatingButton";
import { KeyboardArrowUp } from "@material-ui/icons";
import Container from "./components/container";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Navbar />
      <Container />
      <FloatingButton
        side="left"
        color={"#0288d1"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <KeyboardArrowUp fontSize="large" />
      </FloatingButton>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
