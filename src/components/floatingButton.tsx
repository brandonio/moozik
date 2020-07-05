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
  isRight: boolean;
  onClick: () => void;
};

const FloatingButton: FC<Props> = ({ child, color, isRight, onClick }) => (
  <div
    onClick={onClick}
    style={{
      ...style,
      backgroundColor: color,
      [isRight ? "right" : "left"]: 23,
    }}
  >
    {child}
  </div>
);

export default FloatingButton;
