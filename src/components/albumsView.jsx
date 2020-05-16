import React from "react";
import AlbumCard from "./albumCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const AlbumsView = ({ albums, onExpandClick, onStarClick }) => {
  return (
    <div className="container center">
      <div className="section">
        <div className="row">
          {albums && albums.length ? (
            albums.map((a) => (
              <AlbumCard
                {...a}
                key={a.id}
                onStarClick={onStarClick}
                onExpandClick={onExpandClick}
              />
            ))
          ) : albums ? (
            <h4>There's nothing here...</h4>
          ) : (
            <CircularProgress size={200} style={{ marginTop: 200 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumsView;
