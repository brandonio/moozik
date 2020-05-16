import React, { Component } from "react";
import fetchTopAlbums from "./topAlbums";
import Navbar from "./components/navbar";
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
      this.setState({ albums: this.processData(data, this.state.faves) })
    );
  }

  processData = (data, faves) =>
    data["feed"]["entry"].map((entry, idx) => ({
      key: idx,
      id: idx,
      isFave: faves[idx] || false,
      title: entry["im:name"]["label"],
      songCount: entry["im:itemCount"]["label"],
      price: entry["im:price"]["label"],
      artist: entry["im:artist"]["label"],
      image: entry["im:image"][0]["label"].slice(0, -11) + "400x400bb.png",
      genre: entry["category"]["attributes"]["term"],
      releaseDate: Date(entry["im:releaseDate"]["label"])
        .toString()
        .slice(0, 15),
    }));

  handleNavBtnClick = () => this.setState({ showFaves: !this.state.showFaves });

  handleStarClick = (id) => () => {
    const { faves, albums } = this.state;
    faves[id] ? delete faves[id] : (faves[id] = true);
    localStorage.setItem("faves", JSON.stringify(faves));

    const albumsNew = [...albums];
    albumsNew[id] = {
      ...albums[id],
      isFave: faves[id] || false,
    };

    this.setState({ albums: albumsNew, faves });
  };

  handleExpandClick = (id) => () => this.setState({ popup: id });

  handleModalClose = () => this.setState({ popup: null });

  render() {
    const { showFaves, faves, albums, popup } = this.state;
    const albumsToView =
      showFaves && albums
        ? Object.keys(faves).map((a) => albums[parseInt(a)])
        : albums;
    return (
      <React.Fragment>
        <Navbar showFaves={showFaves} onClick={this.handleNavBtnClick} />
        {popup !== null && (
          <AlbumPopup {...albums[popup]} onClose={this.handleModalClose} />
        )}
        <AlbumsView
          albums={albumsToView}
          onStarClick={this.handleStarClick}
          onExpandClick={this.handleExpandClick}
        />
      </React.Fragment>
    );
  }
}

export default App;
