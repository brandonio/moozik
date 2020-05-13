import React from "react";

const Album = (props) => {
  const color = props.isFave ? "black" : "white";
  return (
    <div className="col s3">
      <div
        onClick={props.onExpandClick}
        className="card hoverable"
        style={{ cursor: "pointer", height: 375, borderRadius: 15 }}
      >
        <div className="card-image">
          <img
            src={props.imageUrl}
            alt={props.name}
            style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
          />
          <a
            onClick={(e) => e.stopPropagation() || props.onStarClick()}
            className="btn-floating halfway-fab waves-effect waves-dark yellow darken-1"
          >
            <i className={color + "-text material-icons"}>star</i>
          </a>
        </div>
        <div className="card-content center">
          <span>
            <b>{props.name}</b>
            <br />
            {props.artist}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Album;
