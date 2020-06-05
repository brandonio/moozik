import React, { FC } from "react";
import Container from "./container";
import Navbar from "./navbar";

const App: FC = () => (
  <React.Fragment>
    <Navbar />
    <Container />
  </React.Fragment>
);

export default App;
