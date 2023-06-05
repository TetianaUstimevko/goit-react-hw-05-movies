import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchDetailsMovies } from 'components/Api';
import {
  StyledContainer,
  StyledFilmName,
  StyledImgContainer,
  StyledDescriptionContainer,
  StyledUserRating,
  StyledListMoviesDetails,
  StyledLink,
  BackLink,
} from './MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkLocationRes = useRef(location.state?.from ?? '/');

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

  if (!movieDetails) {
    return;
  }

  const { poster, title, vote, genres, overview, year } = movieDetails;

  console.log(location);

  return (
    <StyledContainer>
      <div>
        <BackLink to={backLinkLocationRes.current}>Go back</BackLink>

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
