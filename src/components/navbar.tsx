import React, { FC } from "react";

// TODO: use emotion css and fix this
const r: "fixed" = "fixed";
const navbarStyle = {
  alignItems: "center",
  background: "linear-gradient(to left, #2196f3, #3d99be 30%, #512da8)",
  boxShadow: "0 3px 6px -2px #444",
  display: "flex",
  height: 70,
  justifyContent: "center",
  marginBottom: 70,
  position: r,
  width: "100%",
  zIndex: 2,
  color: "white",
};

const egg: string =
  "https://translate.google.com/#view=home&op=translate&sl=fa&tl=en&text=moozik";

const Navbar: FC = () => (
  <div style={navbarStyle}>
    <a target="_blank" rel="noopener noreferrer" href={egg}>
      <img src="/favicon.svg" height={44} width={44} alt="M" />
    </a>
    <span style={{ color: "white", fontSize: 50 }}>oozik</span>
  </div>
);

export default Navbar;
