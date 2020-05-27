import React, { FC } from "react";

type Props = {
  id: number;
  name: string;
  onClick: (id: number) => void;
  pressed: boolean;
};

const GenreButton: FC<Props> = ({ id, name, onClick, pressed }) => (
  <button
    className={
      (pressed ? "deep-purple z-depth-0" : "light-blue") + " btn darken-2"
    }
    onClick={() => onClick(id)}
    style={{ margin: 10 }}
  >
    {name}
  </button>
);

export default GenreButton;
