import { useEffect, useState } from 'react';
import { getMovies } from '../../api/themoviedb-movies-api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Heading from '../../components/Heading/Heading';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const trendingEndPoint = '/trending/movie/day';

  useEffect(() => {
    async function fetchMovies(params, endPoint) {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(params, endPoint);
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies({}, trendingEndPoint);
  }, []);
  return (
    <>
      <Heading variant="header1">Trending today</Heading>
      {movies && movies.length > 1 && !error && <MovieList movies={movies} />}
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
    </>
  );
}
