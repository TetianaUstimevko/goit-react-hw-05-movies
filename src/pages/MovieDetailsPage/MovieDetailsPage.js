import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useMatch,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from '../../services/movies-api';
import s from './MovieDetailsPage.module.css';

const MovieReview = lazy(() =>
  import('../MovieReview' /* webpackChunkName:"MovieReview" */)
);
const MovieCastView = lazy(() =>
  import('../MovieCastView' /* webpackChunkName:"MovieCastView" */)
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch();

  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await getMovieDetails(movieId);
      setMovie(currentMovie);
    };

    getMovie();
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from?.location ?? '/movies');
  };

  return (
    <>
      {!movie ? (
        <div className={s.notFound}>This movie is not found</div>
      ) : (
        <>
          <button className={s.btn} type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={s.movieContainer}>
            <div className={s.movieImg}>
              <img
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                }
                alt={movie.title}
                width=""
                height=""
              />
            </div>

            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {`${movie.vote_average * 10}`}%</p>
              <h3>Overview</h3>
              <p>{`${movie.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movie.genres.map((genre) => genre.name).join(' / ')}`}</p>
            </div>
          </div>
        </>
      )}
      <hr />
      <p>Additional information</p>
      <nav>
        <NavLink
          to={`${match.url}/cast`}
          className={s.link}
          activeClassName={s.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${match.url}/reviews`}
          className={s.link}
          activeClassName={s.active}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCastView movieId={movieId} />} />
          <Route path="reviews" element={<MovieReview movieId={movieId} />} />
        </Routes>
      </Suspense>
    </>
  );
}
