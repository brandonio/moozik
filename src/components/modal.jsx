import React from "react";

const Modal = (props) => {
  return (
    <div
      id="modal1"
      className="modal card"
      style={{ width: "25%", maxHeight: "90%" }}
    >
      <div className="card-image">
        <img src={props.imageUrl} alt={props.name} />
      </div>
      <div className="card-content">
        <h6>Album: {props.name}</h6>
        <h6>Artist: {props.artist}</h6>
        <h6>Genre: {props.genreName}</h6>
        <h6>Released: {props.releaseDate}</h6>
        <h6>Songs: {props.numSongs}</h6>
        <h6>Cost: {props.priceStr}</h6>
      </div>
      <div className="card-action">
        <a href={props.url}>More Info</a>
        <a href={props.genreUrl}>More Like This</a>
      </div>
    </div>
  );
};

export default Modal;
