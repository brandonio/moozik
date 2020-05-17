import React, { FC } from "react";
import AlbumCard from "./albumCard";
import CircularProgress from "@material-ui/core/CircularProgress";

type Props = {
  albums: Album[];
  loading: boolean;
  onExpandClick: (id: number) => void;
  onStarClick: (id: number) => void;
};

const AlbumsView: FC<Props> = ({
  albums,
  loading,
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
            albums.map((a) => (
              <AlbumCard
                key={a.id.toString()}
                album={a}
                onStarClick={onStarClick}
                onExpandClick={onExpandClick}
              />
            ))
          ) : (
            <h4>There's nothing here...</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumsView;
