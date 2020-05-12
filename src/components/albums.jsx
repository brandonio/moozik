import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import fetchTopAlbums from "../topAlbums";

class Albums extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetchTopAlbums().then((data) =>
      this.setState({ data: this.processData(data) })
    );
  }

  processData = (data) => {
    const imgSize = "250";
    const imgSuffix = imgSize + "x" + imgSize + "bb.png";
    const fields = [
      ["im:name", "name"],
      ["im:itemCount", "numSongs"],
      ["im:price", "priceStr"],
      ["rights", "copyright"],
      ["id", "url"],
      ["im:artist", "artist"],
    ];
    return data["feed"]["entry"].map((entry, idx) => {
      const genreInfo = entry["category"]["attributes"];
      const date = new Date(entry["im:releaseDate"]["label"]);
      const albumInfo = {
        id: idx,
        imageUrl: entry["im:image"][0]["label"].slice(0, -11) + imgSuffix,
        isFavorite: false,
        genre: genreInfo["term"],
        genreUrl: genreInfo["scheme"],
        releaseDate: date.toString().slice(0, 15),
        releaseDatetime: date,
        priceNum: parseFloat(entry["im:price"]["attributes"]["amount"]),
      };
      fields.map((field) => (albumInfo[field[1]] = entry[field[0]]["label"]));
      return albumInfo;
    });
  };

  render() {
    return this.state.data ? <h1>Hello, World!</h1> : <LinearProgress />;
  }
}

export default Albums;
