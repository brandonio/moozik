import React from "react";
import Modal from "@material-ui/core/Modal";

const AlbumPopup = (props) => {
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={props.onClose}
      open={true}
    >
      <div className="card" style={{ width: "23%", maxHeight: "85%" }}>
        <div className="card-image">
          <img src={props.imageUrl} alt={props.name} />
        </div>
        <div className="card-content">
          <h6 style={{ lineHeight: 1.5 }}>
            <b>Album:</b> {props.name}
            <br />
            <b>Artist:</b> {props.artist}
            <br />
            <b>Genre:</b> {props.genreName}
            <br />
            <b>Released:</b> {props.releaseDate}
            <br />
            <b>Songs:</b> {props.numSongs}
            <br />
            <b>Cost:</b> {props.priceStr}
          </h6>
        </div>
        <div className="card-action">
          <a rel="noopener noreferrer" target="_blank" href={props.url}>
            Listen
          </a>
          <a rel="noopener noreferrer" target="_blank" href={props.genreUrl}>
            More Like This
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default AlbumPopup;
