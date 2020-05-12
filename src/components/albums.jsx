import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import M from "materialize-css";
import fetchTopAlbums from "../topAlbums";
import Album from "./album";
import Modal from "./modal";

class Albums extends Component {
  state = {
    albums: null,
    favoriteIds: [],
    modalAlbum: null,
  };

  handleFavorite = (e, idx) => {
    e.stopPropagation();
    const oldAlbums = this.state.albums;
    const oldFavoriteIds = this.state.favoriteIds;
    const album = {
      ...oldAlbums[idx],
      isFavorite: !oldAlbums[idx].isFavorite,
    };
    const albums = [
      ...oldAlbums.slice(0, idx),
      album,
      ...oldAlbums.slice(idx + 1),
    ];
    const favoriteIds = album.isFavorite
      ? [idx, ...oldFavoriteIds]
      : oldFavoriteIds.filter((id) => id !== idx);
    this.setState({ albums, favoriteIds });
  };

  handleExpand = (idx) => {
    // TODO: come up with a better way for this
    const modal = this.state.modalAlbum;
    if (modal && this.state.albums[idx].name === modal.name) {
      const ref = document.getElementById("modal1");
      M.Modal.getInstance(ref).open();
    } else {
      this.setState({ modalAlbum: this.state.albums[idx] }, () => {
        const ref = document.getElementById("modal1");
        M.Modal.init(ref);
        M.Modal.getInstance(ref).open();
      });
    }
  };

  componentDidMount() {
    fetchTopAlbums().then((data) =>
      this.setState({ albums: this.processData(data) })
    );
  }

  processData = (data) => {
    const fields = [
      ["im:name", "name"],
      ["im:itemCount", "numSongs"],
      ["im:price", "priceStr"],
      ["id", "url"],
      ["im:artist", "artist"],
    ];

    return data["feed"]["entry"].map((entry, idx) => {
      const genre = entry["category"]["attributes"];
      const date = new Date(entry["im:releaseDate"]["label"]);
      const album = {
        key: idx,
        idx: idx,
        imageUrl: entry["im:image"][2]["label"],
        isFavorite: false,
        genreName: genre["term"],
        genreUrl: genre["scheme"],
        releaseDate: date.toString().slice(0, 15),
        releaseDatetime: date,
        priceNum: parseFloat(entry["im:price"]["attributes"]["amount"]),
      };
      fields.map((field) => (album[field[1]] = entry[field[0]]["label"]));
      return album;
    });
  };

  render() {
    const albums = this.state.albums;
    return albums ? (
      <div className="container">
        <Modal {...this.state.modalAlbum} />
        <div className="row">
          {albums.map((a) => (
            <Album
              {...a}
              onFavorite={(e) => this.handleFavorite(e, a.idx)}
              onExpand={() => this.handleExpand(a.idx)}
            />
          ))}
        </div>
      </div>
    ) : (
      <LinearProgress />
    );
  }
}

export default Albums;
