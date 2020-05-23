import React, { useState, useEffect } from "react";
import { fetchTopAlbums, processJSON } from "./topAlbums";
import Navbar from "./components/navbar";
import AlbumsView from "./components/albumsView";
import AlbumPopup from "./components/albumPopup";

const App = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [faves, setFaves] = useState<Faves>(
    JSON.parse(localStorage.getItem("faves") || "{}")
  );
  const [genre, setGenre] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [popup, setPopup] = useState<number>(-1);
  const [showFaves, setShowFaves] = useState<boolean>(false);

  useEffect(() => {
    fetchTopAlbums(genre)
      .then((json) => processJSON(json))
      .then((albums) => setAlbums(albums))
      .then(() => setLoading(false));
  }, [genre]);

  const handleExpandClick = (id: number): void => setPopup(id);
  const handleGenreClick = (genre: number): void => setGenre(genre);
  const handleModalClose = (): void => setPopup(-1);
  const handleNavBtnClick = (): void => setShowFaves(!showFaves);
  const handleStarClick = (id: number): void => {
    const favesNew = { ...faves };
    favesNew[id] ? delete favesNew[id] : (favesNew[id] = true);
    localStorage.setItem("faves", JSON.stringify(favesNew));
    setFaves(favesNew);
  };

  const albumsToView =
    !loading && showFaves ? albums.filter((a) => faves[a.id]) : albums;

  return (
    <React.Fragment>
      <Navbar onClick={handleNavBtnClick} showFaves={showFaves} />
      {popup !== -1 && (
        <AlbumPopup album={albums[popup]} onClose={handleModalClose} />
      )}
      <AlbumsView
        faves={faves}
        albums={albumsToView}
        loading={loading}
        onGenreClick={handleGenreClick}
        onExpandClick={handleExpandClick}
        onStarClick={handleStarClick}
      />
    </React.Fragment>
  );
};

export default App;
