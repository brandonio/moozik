import React, { FC } from "react";
import AlbumCard from "./albumCard";

type Props = {
  albums: Album[];
  faves: Faves;
  onExpandClick: (index: number) => void;
  onStarClick: (id: string) => void;
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
        key={a.id}
        album={a}
        isFave={faves[a.id]}
        onStarClick={onStarClick}
        onExpandClick={onExpandClick}
      />
    ))}
  </React.Fragment>
);

export default AlbumsView;
