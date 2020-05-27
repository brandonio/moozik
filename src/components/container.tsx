import React, { FC, useState, useEffect } from "react";
import AlbumPopup from "./albumPopup";
import AlbumsView from "./albumsView";
import CircularProgress from "@material-ui/core/CircularProgress";
import FloatingButton from "./floatingButton";
import GenreRow from "./genreRow";
import { fetchAlbums, processAlbums, fetchGenres } from "../topAlbums";
import { KeyboardArrowUp, Star } from "@material-ui/icons";

const Container: FC = () => {
  const [albums, setAlbums] = useState<Album[] | undefined>(undefined);
  const [faves, setFaves] = useState<Faves>(
    JSON.parse(localStorage.getItem("faves") || `{"show": false}`)
  );
  const [genres, setGenres] = useState<Genres>({ current: 1 });
  const [popup, setPopup] = useState<number>(-1);

  useEffect(() => {
    fetchGenres().then((g: Genres) => setGenres({ ...g, current: 1 }));
  }, []);

  useEffect(() => {
    setAlbums(undefined);
    fetchAlbums(genres.current)
      .then((value: JSON) => processAlbums(value))
      .then((albums: Album[]) => setAlbums(albums));
  }, [genres]);

  const handleGenreClick = (id: number): void =>
    setGenres({ ...genres, current: id });
  const handleModalOpen = (index: number): void => setPopup(index);
  const handleModalClose = (): void => setPopup(-1);
  const handleScrollClick = (): void =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const updateFaves = (favesNew: Faves): void => {
    localStorage.setItem("faves", JSON.stringify(favesNew));
    setFaves(favesNew);
  };
  const handleSwitchView = (): void =>
    updateFaves({ ...faves, show: !faves.show });
  const handleStarClick = (id: string): void =>
    updateFaves({ ...faves, [id]: faves[id] ? false : true });

  const albumsToView =
    albums && faves.show ? albums.filter((a) => faves[a.id]) : albums;

  return (
    <div className="container center">
      <div className="section">
        <div className="row">
          <GenreRow genres={genres} onGenreClick={handleGenreClick} />
          {albumsToView === undefined ? (
            <CircularProgress
              size={200}
              style={{
                marginTop: 200,
              }}
            />
          ) : albumsToView.length ? (
            <AlbumsView
              faves={faves}
              albums={albumsToView}
              onExpandClick={handleModalOpen}
              onStarClick={handleStarClick}
            />
          ) : (
            <h4>There's nothing here...</h4>
          )}
          <FloatingButton
            side="left"
            color={"#0288d1"}
            onClick={handleScrollClick}
          >
            <KeyboardArrowUp fontSize="large" />
          </FloatingButton>
          <FloatingButton
            side="right"
            color={faves.show ? "#512da8" : "#fdd835"}
            onClick={handleSwitchView}
          >
            {faves.show ? (
              <img
                src="favicon.svg"
                height={28}
                width={28}
                alt="All"
                style={{ marginRight: 2 }}
              />
            ) : (
              <Star fontSize="large" />
            )}
          </FloatingButton>
          <AlbumPopup
            album={albums ? albums[popup] : undefined}
            onClose={handleModalClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
