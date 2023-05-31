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
    // Fetch movies based on the query and page using the API
    // Replace `apiCall` with your actual API call
    const response = await apiCall(query, page);

    // Update the movies state with the fetched movies
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