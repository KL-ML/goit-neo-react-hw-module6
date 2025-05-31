import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovies } from '../../api/themoviedb-movies-api';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const movieByIdEndPoint = `movie/${movieId}`;
  const location = useLocation();
  const goBackLink = useRef(location.state || '/movies');

  useEffect(() => {
    async function fetchMovieById(params, endPoint) {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(params, endPoint);
        setMovie(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById({}, movieByIdEndPoint);
  }, [movieByIdEndPoint]);

  return (
    <>
      <Link to={goBackLink.current}>Go back</Link>

      {movie && !error && !loading && (
        <Container variant="outerContainer">
          <Container variant="innerContainer">
            <Heading tag="h2" variant="header2">
              {movie.title}{' '}
              <span>
                <br />
                {movie.overview}
              </span>
            </Heading>
            <div className={css.details}>
              <div className={css.imgThumb}>
                <img
                  className={css.img}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : `http://www.suryalaya.org/images/no_image.jpg`
                  }
                  width={240}
                  loading="lazy"
                  alt="poster"
                />
              </div>
              <div className={css.descriptionWrap}>
                <Heading tag="p" variant="paragraf">
                  Release Date:
                  <span>
                    {' '}
                    {new Date(movie.release_date).toLocaleDateString()}
                  </span>
                </Heading>
                <Heading tag="p" variant="paragraf">
                  Rating:
                  <span> {movie.vote_average} %</span>
                </Heading>
                <Heading tag="p" variant="paragraf">
                  Runtime:
                  <span> {movie.runtime} minutes</span>
                </Heading>
              </div>
            </div>
            <ul className={css.buttonsList}>
              <li>
                <NavLink to="cast" className={buildLinkClass}>
                  <Button type="button" text="Cast" variant="outlined" />
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" className={buildLinkClass}>
                  <Button type="button" text="Reviews" variant="outlined" />
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </Container>
        </Container>
      )}
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
    </>
  );
}
