import React, { FC } from "react";
import Modal from "@material-ui/core/Modal";

type Props = {
  album?: Album;
  onClose: () => void;
};

const AlbumPopup: FC<Props> = ({ album, onClose }) => {
  if (!album) return null;

  const { artist, genre, image, price, releaseDate, songCount, title } = album;
  const info = [
    { name: "Album", val: title },
    { name: "Artist", val: artist },
    { name: "Genre", val: genre },
    { name: "Released", val: releaseDate },
    { name: "Songs", val: songCount },
    { name: "Cost", val: price },
  ];
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={onClose}
      open={true}
    >
      <div className="card" style={{ width: "23%", maxHeight: "85%" }}>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div
          className="card-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {info.map(({ name, val }) => (
            <span key={name}>
              <b>{name}</b>: {val}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AlbumPopup;
