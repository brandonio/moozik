import React, { FC } from "react";
import AlbumCard from "./albumCard";

type Props = {
  albums: Album[];
  faves: Faves;
  onExpandClick: (id: number) => void;
  onStarClick: (id: number) => void;
};

const AlbumsView: FC<Props> = ({
  albums,
  faves,
  onExpandClick,
  onStarClick,
}) => (
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
);

export default AlbumsView;
