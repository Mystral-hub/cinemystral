import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  const api_key = "423159923775f95f270f072f1bb06798";
  const base_url = "https://api.themoviedb.org/3/";

  const url = `${base_url}${apiPath}?api_key=${api_key}&page=3`;
  console.log(apiPath);
  console.log(url);

  const [moviesList, setmoviesList] = useState([]);

  useEffect(() => {
    async function fetchMovies(url) {
      const response = await fetch(url);
      const data = await response.json();
      setmoviesList(data.results);
      console.log(data.results);
    }

    fetchMovies(url);
  }, [url]);

  return moviesList;
};
