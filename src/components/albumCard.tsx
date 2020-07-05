import React, { FC } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";

const MAX_LEN: number = 30;

const trunc = (s: string): string =>
  s.substring(0, MAX_LEN).trim() + (s.length > MAX_LEN ? "…" : "");

type Props = {
  album: Album;
  isFave: boolean;
  onModalOpen: (id: string) => void;
  onStarClick: (id: string) => void;
};

const AlbumCard: FC<Props> = ({ album, isFave, onModalOpen, onStarClick }) => {
  const { artist, id, image, title } = album;
  return (
    <div className="col" style={{ width: "20%", left: "auto", right: "auto" }}>
      <div
        onClick={() => onModalOpen(id)}
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
            style={{ right: "auto", marginLeft: -16.2 }}
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
        <div className="card-content" style={{ padding: 10, paddingTop: 20 }}>
          <p style={{ fontWeight: 700 }}>{trunc(title)}</p>
          <p>{trunc(artist)}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
