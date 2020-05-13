import React, { Component } from "react";
import fetchTopAlbums from "./topAlbums";
import Navbar from "./components/navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import AlbumsView from "./components/albums";

class App extends Component {
  state = {
    albums: null,
    faves: [],
    showFaves: false,
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
        id: idx,
        imageUrl: entry["im:image"][2]["label"].slice(0, -11) + "400x400bb.png",
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

  handleNavBtnClick = () => this.setState({ showFaves: !this.state.showFaves });

  handleStarClick = (id) => {
    const faves = this.state.faves;
    const filt = faves.filter((i) => i !== id);
    const newFaves = faves.length === filt.length ? [id, ...faves] : filt;
    this.setState({ faves: newFaves });
  };

  render() {
    const showFaves = this.state.showFaves;
    const albums = showFaves
      ? this.state.faves.map((idx) => this.state.albums[idx])
      : this.state.albums;
    return (
      <React.Fragment>
        <Navbar showFaves={showFaves} onClick={this.handleNavBtnClick} />
        <div className="container center">
          {albums ? (
            <AlbumsView albums={albums} onStarClick={this.handleStarClick} />
          ) : (
            <CircularProgress size={200} style={{ marginTop: 200 }} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
