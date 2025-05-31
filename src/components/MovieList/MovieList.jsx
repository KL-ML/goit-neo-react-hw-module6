import Container from '../Container/Container';
import { Link, useLocation } from 'react-router-dom';
import { RiMovieLine } from 'react-icons/ri';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <Container variant="outerContainer">
      <Container variant="innerContainer">
        <ul className={css.moviesList}>
          {movies?.map(movie => (
            <li className={css.movieLink} key={movie.id}>
              <div className={css.moviesIcon}>
                <RiMovieLine size={18} />
              </div>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
}

MovieList.PropTypes = {
  movies: PropTypes.array,
};
