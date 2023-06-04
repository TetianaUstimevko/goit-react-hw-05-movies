import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchByQuery } from 'components/Api';

import 'react-toastify/dist/ReactToastify.css';
import { StyledForm, StyledSearchInput, StyledSearchButton, StyledLink } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');

  useEffect(() => {
    async function getSearch() {
      if (!movieId) {
        return;
      }

      try {
        const { queryData } = await fetchByQuery(movieId);
        console.log(queryData);
        setMovies(queryData);

        if (queryData.length === 0) {
          toast.warning(
            'Sorry, there are no movies matching your search query. Please try again',
            {
              position: 'top-center',
              theme: 'colored',
            }
          );
        } else {
          toast.success(`Hooray!!! We found your movies`, {
            position: 'top-left',
            theme: 'colored',
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getSearch();
  }, [movieId]);

  const handleSearchSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.movieId.value.trim();

    if (searchQuery !== '') {
      setSearchParams({ movieId: searchQuery });
      form.reset();
    } else {
      toast.warning('Please enter a movie title', {
        position: 'top-center',
        theme: 'colored',
      });
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSearchSubmit}>
        <StyledSearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie title"
          name="movieId"
        />

        <StyledSearchButton type="submit">Search</StyledSearchButton>
      </StyledForm>
      <ToastContainer autoClose={2000} />

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
