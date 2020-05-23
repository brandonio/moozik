import React, { FC } from "react";
import AlbumCard from "./albumCard";
import CircularProgress from "@material-ui/core/CircularProgress";

type Faves = { [key: string]: boolean };

type Props = {
  albums: Album[];
  faves: Faves;
  loading: boolean;
  onGenreClick: (genre: number) => void;
  onExpandClick: (id: number) => void;
  onStarClick: (id: number) => void;
};

const AlbumsView: FC<Props> = ({
  albums,
  faves,
  loading,
  onGenreClick,
  onExpandClick,
  onStarClick,
}) => {
  return (
    <div className="container center">
      <div className="section">
        <div className="row">
          {loading ? (
            <CircularProgress size={200} style={{ marginTop: 200 }} />
          ) : albums.length ? (
            <React.Fragment>
              {albums.map((a) => (
                <AlbumCard
                  key={a.id.toString()}
                  album={a}
                  isFave={faves[a.id]}
                  onStarClick={onStarClick}
                  onExpandClick={onExpandClick}
                />
              ))}
            </React.Fragment>
          ) : (
            <h4>There's nothing here...</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumsView;
