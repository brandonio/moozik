import React, { FC } from "react";
import GenreButton from "./genreButton";

type Props = {
  allGenres: Genres;
  genre: number;
  onGenreClick: (genre: number) => void;
};

const GenreRow: FC<Props> = ({ allGenres, genre, onGenreClick }) => (
  <div className="section">
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Object.entries(allGenres).map(([name, id]) => (
        <GenreButton
          key={id}
          id={id}
          name={name}
          onClick={onGenreClick}
          pressed={id === genre}
        />
      ))}
    </div>
  </div>
);

export default GenreRow;
