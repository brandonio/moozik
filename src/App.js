import React, { Component } from "react";
import fetchTopAlbums from "./topAlbums";
import Navbar from "./components/navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import AlbumsView from "./components/albumsView";
import AlbumPopup from "./components/albumPopup";

class App extends Component {
  state = {
    albums: null,
    faves: JSON.parse(localStorage.getItem("faves")) || {},
    showFaves: false,
    popup: null,
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
    const faves = this.state.faves;
    return data["feed"]["entry"].map((entry, idx) => {
      const genre = entry["category"]["attributes"];
      const date = new Date(entry["im:releaseDate"]["label"]);
      const album = {
        key: idx,
        id: idx,
        isFave: faves[idx] || false,
        imageUrl: entry["im:image"][2]["label"].slice(0, -13) + "400x400bb.png",
        genreName: genre["term"],
        genreUrl: genre["scheme"],
        releaseDate: date.toString().slice(0, 15),
      };
      fields.map((field) => (album[field[1]] = entry[field[0]]["label"]));
      return album;
    });
  };

  handleNavBtnClick = () => this.setState({ showFaves: !this.state.showFaves });

  handleStarClick = (id) => {
    const faves = { ...this.state.faves };
    faves[id] ? delete faves[id] : (faves[id] = true);
    localStorage.setItem("faves", JSON.stringify(faves));

    const oldAlbums = this.state.albums;
    const albums = [
      ...oldAlbums.slice(0, id),
      {
        ...oldAlbums[id],
        isFave: faves[id] || false,
      },
      ...oldAlbums.slice(id + 1),
    ];

    this.setState({ albums, faves });
  };

  handleExpandClick = (id) => this.setState({ popup: id });

  handleModalClose = () => this.setState({ popup: null });

  render() {
    const showFaves = this.state.showFaves;
    const faves = this.state.faves;
    const albums = this.state.albums;
    const popup = this.state.popup;
    const albumsToShow =
      showFaves && albums ? albums.filter((a) => faves[a.id]) : albums;
    return (
      <React.Fragment>
        <Navbar showFaves={showFaves} onClick={this.handleNavBtnClick} />
        {popup !== null && (
          <AlbumPopup {...albums[popup]} onClose={this.handleModalClose} />
        )}
        <div className="container center">
          {albumsToShow ? (
            <AlbumsView
              albums={albumsToShow}
              onStarClick={this.handleStarClick}
              onExpandClick={this.handleExpandClick}
            />
          ) : (
            <CircularProgress size={200} style={{ marginTop: 200 }} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
