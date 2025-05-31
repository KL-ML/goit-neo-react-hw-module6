import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getMovies } from '../../api/themoviedb-movies-api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchEndPoint = 'search/movie';
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryUrl = searchParams.get('query') ?? '';

  const handleFormSubmit = searchQuery => {
    searchParams.set('query', searchQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!searchQueryUrl) return;

    async function fetchMoviesByQuery(params, endPoint) {
      try {
        setMovies([]);
        setLoading(true);
        setError(false);
        const data = await getMovies(params, endPoint);
        if (data.total_results === 0) {
          setError(true);
          searchParams.delete('query');
          setSearchParams(searchParams);
          setMovies([]);
        }
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMoviesByQuery({ params: { query: searchQueryUrl } }, searchEndPoint);
  }, [searchQueryUrl, searchParams, setSearchParams]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} searchQueryUrl={searchQueryUrl} />
      {error && <ErrorMessage message="There are no movies on your query!" />}
      {movies && movies.length > 0 && !error && <MovieList movies={movies} />}
      {loading && <Loader loading={loading} />}
    </>
  );
}
