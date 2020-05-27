import React, { FC } from "react";
import GenreButton from "./genreButton";

type Props = {
  genres: Genres;
  onGenreClick: (id: number) => void;
};

const GenreRow: FC<Props> = ({ genres, onGenreClick }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 80,
      marginBottom: 15,
    }}
  >
    {Object.entries(genres).map(
      ([name, id]) =>
        name !== "current" && (
          <GenreButton
            key={id}
            id={id}
            name={name}
            onClick={onGenreClick}
            pressed={id === genres.current}
          />
        )
    )}
  </div>
);

export default GenreRow;
