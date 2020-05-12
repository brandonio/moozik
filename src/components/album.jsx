import React from "react";

const Album = (props) => {
  return (
    <div className="col s3">
      <div
        onClick={props.onExpand}
        className="card hoverable"
        style={{ cursor: "pointer", height: 375 }}
      >
        <div className="card-image">
          <img src={props.imageUrl} alt={props.name} />
          <a
            onClick={props.onFavorite}
            className="btn-floating halfway-fab waves-effect waves-dark yellow darken-1"
          >
            {!props.isFavorite && <i className="material-icons">star</i>}
            {props.isFavorite && (
              <i className="material-icons black-text">star</i>
            )}
          </a>
        </div>
        <div className="card-content center">
          <span>
            <b>{props.name}</b>
          </span>
          <br />
          <span>{props.artist}</span>
        </div>
      </div>
    </div>
  );
};

export default Album;
