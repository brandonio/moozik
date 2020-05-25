type Album = {
  artist: string;
  genre: string;
  id: number;
  image: string;
  index: number;
  price: string;
  releaseDate: string;
  songCount: number;
  title: string;
};

type Faves = { [key: string]: boolean };
type Genres = { [key: string]: number };
