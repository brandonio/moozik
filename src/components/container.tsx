import React, { FC } from "react";
import AlbumsView from "./albumsView";
import CircularProgress from "@material-ui/core/CircularProgress";
import GenreRow from "./genreRow";

type Props = {
  albums: Album[];
  allGenres: Genres;
  faves: Faves;
  genre: number;
  loading: boolean;
  onGenreClick: (genre: number) => void;
  onExpandClick: (id: number) => void;
  onStarClick: (id: number) => void;
};

const Container: FC<Props> = ({
  albums,
  allGenres,
  faves,
  genre,
  loading,
  onGenreClick,
  onExpandClick,
  onStarClick,
}) => (
  <div className="container center">
    <div className="section">
      <div className="row">
        <GenreRow
          allGenres={allGenres}
          genre={genre}
          onGenreClick={onGenreClick}
        />
        {loading ? (
          <CircularProgress size={200} style={{ marginTop: 200 }} />
        ) : albums.length ? (
          <AlbumsView
            faves={faves}
            albums={albums}
            onExpandClick={onExpandClick}
            onStarClick={onStarClick}
          />
        ) : (
          <h4>There's nothing here...</h4>
        )}
      </div>
    </div>
  </div>
);

export default Container;
