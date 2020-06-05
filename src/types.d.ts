type Album = {
  artist: string;
  genre: string;
  id: string;
  image: string;
  price: string;
  releaseDate: string;
  songCount: number;
  title: string;
};

type AlbumMap = { [id: string]: Album };
type Faves = { [_: string]: boolean };
type Genres = { [name: string]: number };
