import * as actionTypes from './actionTypes';

const APIKEY = '4c104bb2d4853893a5192e3519893b05';

export const fetchMovies = data => {
  return {
    type: actionTypes.STORE_MOVIES_DATA,
    payload: data,
  };
};

export const fetchMoviesAsync = query => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`,
      );
      const data = await response.json();
      dispatch(fetchMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchGenres = data => {
  return {
    type: actionTypes.STORE_GENRES_DATA,
    payload: data,
  };
};

export const fetchGenresAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`,
      );
      const data = await response.json();
      dispatch(fetchGenres(data.genres));
    } catch (err) {
      console.log(err);
    }
  };
};
