import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/Api';
import MoviesList from 'components/MovieList/MovieList';

import { StyledHomeHeading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies.movies);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <StyledHomeHeading>Trending today</StyledHomeHeading>

      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
