import axios from "axios";

export const fetchData = (searchText) => {
  var options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${searchText}`,
    headers: {
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "6a502ec9b0msh9e17188686d94f1p11b4e2jsnd09b7d473ab8",
    },
  };
  // const url = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchText}`
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
