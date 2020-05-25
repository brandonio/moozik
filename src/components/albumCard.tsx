import React, { FC } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";

const maxLength: number = 30;
const trim = (s: string): string =>
  s.length > maxLength ? s.substring(0, maxLength - 1) + "…" : s;

type Props = {
  album: Album;
  isFave: boolean;
  onExpandClick: (index: number) => void;
  onStarClick: (id: number) => void;
};

const AlbumCard: FC<Props> = ({
  album,
  isFave,
  onExpandClick,
  onStarClick,
}) => {
  const { artist, id, image, index, title } = album;
  return (
    <div
      className="col"
      style={{ width: "20%", marginLeft: "auto", left: "auto", right: "auto" }}
    >
      <div
        onClick={() => onExpandClick(index)}
        className="card hoverable"
        style={{ cursor: "pointer", height: 300, borderRadius: 15 }}
      >
        <div className="card-image">
          <img
            src={image}
            alt={title}
            style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
          />
          <FormControlLabel
            label=""
            className="btn-floating btn-small halfway-fab yellow darken-1"
            style={{
              right: "auto",
              left: "auto",
              marginRight: 0,
              marginLeft: -16.2,
            }}
            control={
              <Checkbox
                checked={isFave}
                checkedIcon={<Star />}
                icon={<StarBorder />}
                onChange={() => onStarClick(id)}
                onClick={(e) => e.stopPropagation()}
                style={{ padding: 5, margin: 0 }}
              />
            }
          />
        </div>
        <div
          className="card-content center"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            paddingTop: 20,
          }}
        >
          <span>
            <b>{trim(title)}</b>
          </span>
          <span>{trim(artist)}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
