const GENRE_DATA: Genres = {
  All: 1,
  Blues: 2,
  Classical: 5,
  Comedy: 3,
  Country: 6,
  Dance: 17,
  Electro: 7,
  Holiday: 8,
  Jazz: 11,
  "Children's": 4,
  Latin: 12,
  "New Age": 13,
  Opera: 9,
  Pop: 14,
  "R&B": 15,
  Rap: 18,
  Soundtrack: 16,
};

const fetchGenres = async (): Promise<Genres> =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(GENRE_DATA), 1);
  });

const fetchAlbums = async (
  genre: number,
  limit: number = 30,
  explicit: boolean = true
): Promise<JSON> =>
  fetch(
    `https://itunes.apple.com/us/rss/topalbums/genre=${genre}/explicit=${explicit}/limit=${limit}/json`
  ).then((res) => res.json());

// TODO: fix usage of "any"
const processAlbums = (json: any): Album[] =>
  json["feed"]["entry"].map((entry: any, idx: number) => ({
    artist: entry["im:artist"]["label"],
    genre: entry["category"]["attributes"]["term"],
    id: entry["id"]["attributes"]["im:id"],
    image: entry["im:image"][0]["label"].slice(0, -11) + "400x400bb.png",
    index: idx,
    key: idx,
    price: entry["im:price"]["label"],
    releaseDate: new Date(entry["im:releaseDate"]["label"])
      .toString()
      .slice(0, 15),
    songCount: entry["im:itemCount"]["label"],
    title: entry["im:name"]["label"],
  }));

export { fetchGenres, fetchAlbums, processAlbums };
