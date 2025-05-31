import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const MY_KEY = 'cfc4cd1cc06184d90b3581b388e6e4e5';
const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmM0Y2QxY2MwNjE4NGQ5MGIzNTgxYjM4OGU2ZTRlNSIsIm5iZiI6MTY3NDM4NjY1My4xLCJzdWIiOiI2M2NkMWNkZDlhNjQzNTAwOGFiYmE0N2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Khq8ITmnVrs00uXmDcZEpHOFR0gQTMtx43Wa8IBAI8o';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = TOKEN;

export const getMovies = async (params, endPoint) => {
  const { data } = await axios.get(endPoint, params);

  return data;
};
