import React, { useEffect, useState } from "react";
import axios from 'axios'
import Movies from '../components/Movies';
import Pagination from '../components/Pagination';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(9);

  useEffect(() => {
    axios.get('https://localhost:7123/get-all-movies').then(({ data }) => setMovies(data));
  }, []);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);
  const paginate = pageNumber => { setCurrentPage(pageNumber) }
  return (
    <div>
      <Movies movies={currentMovies} />
      <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}
