import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

type Props = {
  onClick: () => void;
  showFaves: boolean;
};

const Navbar: FC<Props> = ({ onClick, showFaves }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="valign-wrapper">
          <h4 style={{ flexGrow: 1 }}>
            <a
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://translate.google.com/#view=home&op=translate&sl=fa&tl=en&text=moozik"
            >
              <b>♫ Moozik</b>
            </a>
          </h4>
          <h5 style={{ flexGrow: 1 }}>{showFaves ? "Favorites" : "Albums"}</h5>
          <button
            className="btn yellow darken-1 black-text"
            onClick={onClick}
            style={{ width: 125 }}
          >
            <b>{showFaves ? "Albums" : "Favorites"}</b>
          </button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
