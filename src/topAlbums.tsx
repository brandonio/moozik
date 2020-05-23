type JSON = { [key: string]: any };

const fetchTopAlbums = async (
  genre: number,
  limit: number = 10,
  explicit: boolean = true
): Promise<JSON> =>
  await fetch(
    `https://itunes.apple.com/us/rss/topalbums/genre=${genre}/explicit=${explicit}/limit=${limit}/json`
  ).then((data) => data.json());

const processJSON = (json: JSON): Album[] =>
  json["feed"]["entry"].map((entry: JSON, idx: number) => ({
    key: idx,
    id: parseInt(entry["id"]["attributes"]["im:id"]),
    title: entry["im:name"]["label"],
    songCount: entry["im:itemCount"]["label"],
    price: entry["im:price"]["label"],
    artist: entry["im:artist"]["label"],
    image: entry["im:image"][0]["label"].slice(0, -11) + "400x400bb.png",
    genre: entry["category"]["attributes"]["term"],
    releaseDate: new Date(entry["im:releaseDate"]["label"])
      .toString()
      .slice(0, 15),
  }));

export { fetchTopAlbums, processJSON };
