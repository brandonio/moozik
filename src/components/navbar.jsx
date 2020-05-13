import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = (props) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            Moozik
          </Typography>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            {props.showFaves ? "Favorites" : "All Albums"}
          </Typography>
          <Button color="inherit" onClick={props.onClick}>
            {props.showFaves ? "All Albums" : "Favorites"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
