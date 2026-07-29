import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<MovieList apiPath="movie/top_rated" />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        {/* <Route path="movie/:id" element={<MovieDetails />} /> */}
        <Route
          path="movie/popular"
          element={<MovieList apiPath="movie/popular" />}
        />
        <Route
          path="movie/upcoming"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        <Route
          path="movie/top"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
