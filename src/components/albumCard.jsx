import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

const AlbumCard = (props) => {
  return (
    <div className="col s3">
      <div
        onClick={props.onExpandClick}
        className="card hoverable"
        style={{ cursor: "pointer", height: 400, borderRadius: 15 }}
      >
        <div className="card-image">
          <img
            src={props.imageUrl}
            alt={props.name}
            style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
          />
          <FormControlLabel
            className="btn-floating halfway-fab yellow darken-1"
            name={props.id.toString()}
            control={
              <Checkbox
                onClick={(e) => e.stopPropagation()}
                onChange={props.onStarClick}
                icon={<StarBorder />}
                checkedIcon={<Star />}
                checked={props.isFave}
              />
            }
          />
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

export default AlbumCard;
