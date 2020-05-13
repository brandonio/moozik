import React from "react";
import Album from "./album";

const AlbumsView = (props) => {
  return (
    <div className="section">
      <div className="row">
        {props.albums.map((a) => (
          <Album
            {...a}
            onStarClick={() => props.onStarClick(a.id)}
            onExpand={() => this.handleExpand(a.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsView;
