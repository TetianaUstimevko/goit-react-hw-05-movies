import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import LoadMore from '../components/LoadMore';

const Movies = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/movies?query=${query}`);
      fetchMovies();
    }
  };

  const fetchMovies = async () => {
    const response = await apiCall(query, page);
    setMovies(response.data.results);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
      <LoadMore onClick={() => setPage(page + 1)} />
    </div>
  );
};

export default Movies;