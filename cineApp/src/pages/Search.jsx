import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("q");
  const moviesList = useFetch(apiPath, queryTerms);

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
