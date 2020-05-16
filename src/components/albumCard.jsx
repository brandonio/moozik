import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

const AlbumCard = ({
  artist,
  image,
  isFave,
  onExpandClick,
  onStarClick,
  title,
}) => {
  return (
    <div className="col s3">
      <div
        onClick={onExpandClick}
        className="card hoverable"
        style={{ cursor: "pointer", height: 400, borderRadius: 15 }}
      >
        <div className="card-image">
          <img
            src={image}
            alt={title}
            style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
          />
          <FormControlLabel
            className="btn-floating halfway-fab yellow darken-1"
            control={
              <Checkbox
                onClick={(e) => e.stopPropagation()}
                onChange={onStarClick}
                icon={<StarBorder />}
                checkedIcon={<Star />}
                checked={isFave}
              />
            }
          />
        </div>
        <div
          className="card-content center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span>
            <b>{title}</b>
          </span>
          <span>{artist}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
