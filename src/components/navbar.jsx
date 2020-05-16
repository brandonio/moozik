import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = ({ onClick, showFaves }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            <a
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://translate.google.com/#view=home&op=translate&sl=fa&tl=en&text=moozik"
            >
              <b>♫ Moozik</b>
            </a>
          </Typography>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            {showFaves ? "Favorites" : "All Albums"}
          </Typography>
          <Button className="btn yellow darken-1" onClick={onClick}>
            {showFaves ? "All Albums" : "Favorites"}
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
