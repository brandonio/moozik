import React, { FC } from "react";

// TODO: use emotion css and fix this
const f: "fixed" = "fixed";
const style = {
  alignItems: "center",
  borderRadius: "50%",
  bottom: 23,
  boxShadow:
    "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
  color: "white",
  cursor: "pointer",
  display: "flex",
  height: 60,
  justifyContent: "center",
  position: f,
  width: 60,
  zIndex: 3,
};

type Props = {
  child: any;
  color: string;
  onClick: () => void;
  side: string;
};

const FloatingButton: FC<Props> = ({ child, color, onClick, side }) => (
  <div
    style={{ ...style, backgroundColor: color, [side]: 23 }}
    onClick={onClick}
  >
    {child}
  </div>
);

export default FloatingButton;
