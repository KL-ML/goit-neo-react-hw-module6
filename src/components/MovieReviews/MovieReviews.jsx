import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from '../../api/themoviedb-movies-api';
import css from './MovieReviews.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Heading from '../Heading/Heading';

export default function MovieReviews() {
  const [review, setReview] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const reviewEndPoint = `/movie/${movieId}/reviews`;

  useEffect(() => {
    async function fetchMovieReviews(params, purpose) {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(params, purpose);
        setReview(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
        setReview([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews({}, reviewEndPoint);
  }, [reviewEndPoint]);

  return (
    <>
      <ul className={css.reviewList}>
        {review.length > 0 &&
          !error &&
          review.map(({ author, content, id }) => (
            <li className={css.reviewItem} key={id}>
              <Heading tag="p" variant="paragraf">
                {author}
                <br />
                <span>{content}</span>
              </Heading>
            </li>
          ))}
        {review.length === 0 && !loading && (
          <ErrorMessage message="Sorry, we don't have any review for this movie" />
        )}
      </ul>
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
    </>
  );
}
