import { GET_LIST_MOVIES } from './../constants';
import axios from 'axios';
import { API_URL } from './../constants';

export const fetchMovies = (movies) => {
   return {
      type: GET_LIST_MOVIES,
      movies
   }
};

export const listMoviesAction = (page = 1) => {
   return (dispatch) => {
      // return axios.get(`${API_URL}/movies`)
      return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&page=${page}`)
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
      // return axios.get(`${API_URL}/movies`)
      return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=${term}&page=${page}`)
         .then(response => {
            dispatch(fetchMovies(response.data))
         })
         .catch(error => {
            throw (error);
         });
   };
};

export const API_LIST_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d";

export const API_SEARCH_MOVIES = `https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query="after"`;

export const API_LIST_GENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=1f54bd990f1cdfb230adb312546d765d";