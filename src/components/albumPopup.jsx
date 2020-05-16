import React from "react";
import Modal from "@material-ui/core/Modal";

const AlbumPopup = ({
  artist,
  genre,
  image,
  onClose,
  price,
  releaseDate,
  songCount,
  title,
}) => {
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
