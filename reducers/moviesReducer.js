import {STORE_MOVIES_DATA, STORE_GENRES_DATA} from '../actions/actionTypes';

const initialState = {
  movies: [],
  gentres: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_MOVIES_DATA:
      return {
        ...state,
        movies: [...action.payload],
      };
    case STORE_GENRES_DATA:
      return {
        ...state,
        genres: [...action.payload],
      };
    default:
      return state;
  }
};

export default moviesReducer;
