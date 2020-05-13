import React from "react";
import Album from "./album";

const AlbumsView = (props) => {
  const albums = props.albums;
  return (
    <div className="section">
      <div className="row">
        {albums.length === 0 ? (
          <h4>There's nothing here...</h4>
        ) : (
          props.albums.map((a) => (
            <Album
              {...a}
              onStarClick={() => props.onStarClick(a.id)}
              onExpandClick={() => props.onExpandClick(a.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AlbumsView;
