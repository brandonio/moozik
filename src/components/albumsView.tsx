import React, { FC } from "react";
import AlbumCard from "./albumCard";

type Props = {
  albums: Album[];
  faves: Faves;
  onModalOpen: (id: string) => void;
  onStarClick: (id: string) => void;
};

const AlbumsView: FC<Props> = ({ albums, faves, onModalOpen, onStarClick }) => (
  <div className="row">
    {albums.map((a) => (
      <AlbumCard
        album={a}
        isFave={faves[a.id]}
        key={a.id}
        onStarClick={onStarClick}
        onModalOpen={onModalOpen}
      />
    ))}
  </div>
);

export default AlbumsView;
