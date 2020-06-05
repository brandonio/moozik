import React, { FC, useState, useEffect } from "react";
import AlbumsView from "./albumsView";
import CircularProgress from "@material-ui/core/CircularProgress";
import FloatingButton from "./floatingButton";
import GenreRow from "./genreRow";
import { fetchAlbums, processAlbums, fetchGenres } from "../topAlbums";
import { KeyboardArrowUp, Star } from "@material-ui/icons";
import AlbumPopup from "./albumPopup";

const Container: FC = () => {
  const [albums, setAlbums] = useState<AlbumMap>({});
  const [faves, setFaves] = useState<Faves>(
    JSON.parse(localStorage.getItem("faves") || `{"show": false}`)
  );
  const [genres, setGenres] = useState<Genres>({ current: 1 });
  const [popup, setPopup] = useState<string>("");

  useEffect(() => {
    fetchGenres().then((g: Genres) => setGenres({ ...g, current: 1 }));
  }, []);

  useEffect(() => {
    setAlbums({});
    fetchAlbums(genres.current).then((value: JSON) =>
      setAlbums(processAlbums(value))
    );
  }, [genres]);

  const handleGenreClick = (genreId: number) =>
    setGenres({ ...genres, current: genreId });

  const handleModalOpen = (id: string) => setPopup(id);
  const handleModalClose = () => setPopup("");

  const updateFaves = (updated: Faves) => {
    const favesNew = { ...faves, ...updated };
    localStorage.setItem("faves", JSON.stringify(favesNew));
    setFaves(favesNew);
  };
  const handleSwitchView = () => updateFaves({ show: !faves.show });
  const handleStarClick = (id: string) => updateFaves({ [id]: !faves[id] });

  const vals = Object.values(albums);
  const albumsToView = !vals.length
    ? undefined
    : faves.show
    ? vals.filter((a) => faves[a.id])
    : vals;

  const switchChild = faves.show ? (
    <img src="favicon.svg" height={25} width={25} alt="All" />
  ) : (
    <Star fontSize="large" />
  );

  return (
    <div className="container center">
      <div className="section">
        <div className="row">
          <GenreRow genres={genres} onGenreClick={handleGenreClick} />

          {albumsToView === undefined ? (
            <CircularProgress size={200} style={{ marginTop: 150 }} />
          ) : albumsToView.length === 0 ? (
            <h4>There's nothing here...</h4>
          ) : (
            <AlbumsView
              faves={faves}
              albums={albumsToView}
              onModalOpen={handleModalOpen}
              onStarClick={handleStarClick}
            />
          )}

          <AlbumPopup album={albums[popup]} onClose={handleModalClose} />

          <FloatingButton
            child={<KeyboardArrowUp fontSize="large" />}
            color={"#0288d1"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            side="left"
          />
          <FloatingButton
            child={switchChild}
            color={faves.show ? "#512da8" : "#fcc830"}
            onClick={handleSwitchView}
            side="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
