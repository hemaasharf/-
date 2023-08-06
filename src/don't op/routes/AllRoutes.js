import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MovieList apiPath="movie/now_playing" title = "Home / Cinmate" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList apiPath="/movie/popular" title="Popular / Cinmate" />} />
        <Route path="movies/top" element={<MovieList apiPath = "/movie/top_rated" title="TopRated / Cinmate"/>} />
        <Route path="movies/upcoming" element={<MovieList apiPath = '/movie/upcoming' title="Upcoming / Cinmate" />} />
        <Route path="search" element={<Search apiPath = "search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
