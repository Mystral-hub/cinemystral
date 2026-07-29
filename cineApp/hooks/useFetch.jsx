import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerms) => {
  const api_key = import.meta.env.VITE_API_KEY;
  const base_url = "https://api.themoviedb.org/3/";

  const url = `${base_url}${apiPath}?api_key=${api_key}&page=3&query=${queryTerms}`;
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
