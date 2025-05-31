import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../api/themoviedb-movies-api';
import css from './MovieCast.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Heading from '../Heading/Heading';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const castEndPoint = `movie/${movieId}/credits`;

  useEffect(() => {
    async function fetchMovieCast(params, endPoint) {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(params, endPoint);
        setCast(data.cast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast({}, castEndPoint);
  }, [castEndPoint]);

  return (
    <>
      <ul className={css.castList}>
        {cast &&
          cast.length > 0 &&
          !error &&
          cast.map(({ id, name, character, profile_path }) => {
            return (
              <li className={css.castItem} key={id}>
                <div className={css.imgWrap}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `https://i.ibb.co/VcymNTX6/cc935c5234d7b0f98ad28514ac10a205.png`
                    }
                    alt="actor"
                    loading="lazy"
                    width={180}
                  />
                </div>

                <div className={css.castInfo}>
                  <Heading tag="p" variant="smallParagraf">
                    {name}
                    <span> Character: {character}</span>
                  </Heading>
                </div>
              </li>
            );
          })}
        {cast.length === 0 && !loading && (
          <ErrorMessage message="Sorry, we don't have any credits for this movie" />
        )}
        {loading && <Loader loading={loading} />}
        {error && <ErrorMessage />}
      </ul>
    </>
  );
}
