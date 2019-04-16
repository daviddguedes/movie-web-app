import { GET_LIST_MOVIES } from './../constants';
import axios from 'axios';
import { API_URL } from './../constants';

// const URL_TMDB_LIST = `https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&page=${page}`;

// const URL_TMDB_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=${term}&page=${page}`;

export const fetchMovies = (movies) => {
   return {
      type: GET_LIST_MOVIES,
      movies
   }
};

export const listMoviesAction = (page = 1) => {
   return (dispatch) => {
      return axios.get(`${API_URL}/movies/${page}`)
         .then(response => {
            dispatch(fetchMovies(response.data))
         })
         .catch(error => {
            throw (error);
         });
   };
};

export const listMoviesByTermAction = (term = '', page = 1) => {
   return (dispatch) => {
      return axios.get(`${API_URL}/movie/${term}/${page}`)
         .then(response => {
            dispatch(fetchMovies(response.data))
         })
         .catch(error => {
            throw (error);
         });
   };
};