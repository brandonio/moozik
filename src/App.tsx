import React, { useState, useEffect } from "react";
import { fetchGenres, fetchAlbums, processAlbums } from "./topAlbums";
import AlbumPopup from "./components/albumPopup";
import Container from "./components/container";
import Navbar from "./components/navbar";

const App = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [allGenres, setAllGenres] = useState<Genres>({});
  const [faves, setFaves] = useState<Faves>(
    JSON.parse(localStorage.getItem("faves") || "{}")
  );
  const [genre, setGenre] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [popup, setPopup] = useState<number>(-1);
  const [showFaves, setShowFaves] = useState<boolean>(false);

  useEffect(() => {
    fetchGenres().then((allGenres) => setAllGenres(allGenres));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchAlbums(genre)
      .then((rawAlbums) => processAlbums(rawAlbums))
      .then((albums) => setAlbums(albums))
      .then(() => setLoading(false));
  }, [genre]);

  const handleExpandClick = (index: number): void => setPopup(index);
  const handleGenreClick = (genre: number): void => setGenre(genre);
  const handleModalClose = (): void => setPopup(-1);
  const handleNavBtnClick = (): void => setShowFaves(!showFaves);
  const handleStarClick = (id: number): void => {
    const favesNew = { ...faves, [id]: faves[id] ? false : true };
    localStorage.setItem("faves", JSON.stringify(favesNew));
    setFaves(favesNew);
  };

  const albumsToView = showFaves ? albums.filter((a) => faves[a.id]) : albums;

  return (
    <React.Fragment>
      <Navbar onClick={handleNavBtnClick} showFaves={showFaves} />
      <Container
        albums={albumsToView}
        allGenres={allGenres}
        faves={faves}
        genre={genre}
        loading={loading}
        onGenreClick={handleGenreClick}
        onExpandClick={handleExpandClick}
        onStarClick={handleStarClick}
      />
      <AlbumPopup album={albums[popup]} onClose={handleModalClose} />
    </React.Fragment>
  );
};

export default App;
