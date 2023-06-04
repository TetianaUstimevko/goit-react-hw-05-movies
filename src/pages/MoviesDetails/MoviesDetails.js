import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchDetailsMovies } from 'components/Api';
import {
  StyledContainer,
  StyledFilmName,
  StyledImgContainer,
  StyledDescriptionContainer,
  StyledUserRating, StyledListMoviesDetails, StyledLink
} from './MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  const { poster, title, vote, genres, overview, year } = movieDetails ?? {};

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const detailsMovie = await fetchDetailsMovies(movieId);

        setMovieDetails(detailsMovie);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieDetails();
  }, [movieId]);

  return (
    <StyledContainer>
      <div>
        {movieDetails && (
          <StyledImgContainer>
            <img src={poster} alt={title} />
            <StyledDescriptionContainer>
              <StyledFilmName>
                {title}({year})
              </StyledFilmName>
              <StyledUserRating>User score: {vote}</StyledUserRating>
              <h2>Overweiw</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres}</p>
            </StyledDescriptionContainer>
          </StyledImgContainer>
        )}
      </div>

       {/* <StyledBackButton
            type="button"
            onClick={() => navigate(location.state?.from ?? '/movies')}
          >
            Go Back
          </StyledBackButton> */}

      <StyledListMoviesDetails>
        <li>
          <StyledLink to="cast"> Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews"> Reviews </StyledLink>
        </li>
      </StyledListMoviesDetails>
      <Outlet />
    </StyledContainer>
  );
};

export default MovieDetails;
