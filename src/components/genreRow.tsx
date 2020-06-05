import React, { FC } from "react";
import GenreButton from "./genreButton";

type Props = {
  genres: Genres;
  onGenreClick: (genreId: number) => void;
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
      ([name, genreId]) =>
        name !== "current" && (
          <GenreButton
            key={genreId}
            genreId={genreId}
            name={name}
            onClick={onGenreClick}
            pressed={genreId === genres.current}
          />
        )
    )}
  </div>
);

export default GenreRow;
