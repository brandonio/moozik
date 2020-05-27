type Album = {
  artist: string;
  genre: string;
  id: string;
  image: string;
  index: number;
  price: string;
  releaseDate: string;
  songCount: number;
  title: string;
};

type Faves = { [_: string]: boolean };
type Genres = { [name: string]: number };
