import axios from "axios";

export const fetchMovies = (title) => {
  const url = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${title}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((value) => resolve(value))
      .catch((error) => reject(error));
  });
};
