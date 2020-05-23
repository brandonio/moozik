import React, { FC } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";

type Props = {
  album: Album;
  isFave: boolean;
  onExpandClick: (id: number) => void;
  onStarClick: (id: number) => void;
};

const AlbumCard: FC<Props> = ({ album, isFave, onExpandClick, onStarClick }) => {
  const { artist, id, image, title } = album;
  return (
    <div className="col s3">
      <div
        onClick={() => onExpandClick(id)}
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
            label=""
            className="btn-floating halfway-fab yellow darken-1"
            control={
              <Checkbox
                checked={isFave}
                checkedIcon={<Star />}
                icon={<StarBorder />}
                onChange={() => onStarClick(id)}
                onClick={(e) => e.stopPropagation()}
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
