import { useEffect, useState } from "react";
import { Card } from "../components";
import { useFetch } from "../../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const moviesList = useFetch(apiPath);

  return (
    <div className="text-center" id="MovieList">
      <section
        id="movie-container"
        className="flex justify-center flex-wrap gap-4">
        {moviesList.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
};
