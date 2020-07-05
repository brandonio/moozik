import React, { FC } from "react";

type Props = {
  genreId: number;
  name: string;
  onClick: (genreId: number) => void;
  pressed: boolean;
};

const GenreButton: FC<Props> = ({ genreId, name, onClick, pressed }) => (
  <button
    className={(pressed ? "deep-purple z-depth-0" : "blue") + " btn"}
    onClick={() => onClick(genreId)}
    style={{ margin: 10 }}
  >
    {name}
  </button>
);

export default GenreButton;
