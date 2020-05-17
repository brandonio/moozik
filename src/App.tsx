import React, { useState, useEffect } from "react";
import fetchTopAlbums from "./topAlbums";
import Navbar from "./components/navbar";
import AlbumsView from "./components/albumsView";
import AlbumPopup from "./components/albumPopup";

type Faves = { [key: string]: boolean };
type JSON = { [key: string]: any };

const App = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [faves, setFaves] = useState<Faves>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [popup, setPopup] = useState<number>(-1);
  const [showFaves, setShowFaves] = useState<boolean>(false);

  useEffect(() => {
    fetchTopAlbums().then((data) => {
      const [f, a] = processData(data);
      setAlbums(a);
      setFaves(f);
      setLoading(false);
    });
  }, []);

  const processData = (data: JSON): [Faves, Album[]] => {
    const f = JSON.parse(localStorage.getItem("faves") || "{}");
    return [
      f,
      data["feed"]["entry"].map((entry: JSON, idx: number) => ({
        key: idx,
        id: idx,
        isFave: Boolean(f[idx]),
        title: entry["im:name"]["label"],
        songCount: entry["im:itemCount"]["label"],
        price: entry["im:price"]["label"],
        artist: entry["im:artist"]["label"],
        image: entry["im:image"][0]["label"].slice(0, -11) + "400x400bb.png",
        genre: entry["category"]["attributes"]["term"],
        releaseDate: new Date(entry["im:releaseDate"]["label"])
          .toString()
          .slice(0, 15),
      })),
    ];
  };

  const handleExpandClick = (id: number): void => setPopup(id);
  const handleModalClose = (): void => setPopup(-1);
  const handleNavBtnClick = (): void => setShowFaves(!showFaves);
  const handleStarClick = (id: number): void => {
    const favesNew = { ...faves };
    favesNew[id] ? delete favesNew[id] : (favesNew[id] = true);
    localStorage.setItem("faves", JSON.stringify(favesNew));
    setFaves(favesNew);

    const albumsNew = [...albums];
    albumsNew[id] = {
      ...albums[id],
      isFave: Boolean(favesNew[id]),
    };
    setAlbums(albumsNew);
  };

  const albumsToView =
    showFaves && !loading
      ? Object.keys(faves).map((a) => albums[parseInt(a)])
      : albums;

  return (
    <React.Fragment>
      <Navbar onClick={handleNavBtnClick} showFaves={showFaves} />
      {popup !== -1 && (
        <AlbumPopup album={albums[popup]} onClose={handleModalClose} />
      )}
      <AlbumsView
        albums={albumsToView}
        loading={loading}
        onExpandClick={handleExpandClick}
        onStarClick={handleStarClick}
      />
    </React.Fragment>
  );
};

export default App;
