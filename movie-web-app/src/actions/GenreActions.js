import { GET_LIST_GENRE } from './../constants';
import axios from 'axios';
import { API_URL } from './../constants';

export const fetchGenres = (data) => {
   return {
      type: GET_LIST_GENRE,
      data
   }
};

export const listGenreAction = () => {
   return (dispatch) => {
      // return axios.get(`${API_URL}/genres`)
      return axios.get(API_LIST_GENRES)
         .then(response => {
            dispatch(fetchGenres(response.data))
         })
         .catch(error => {
            throw (error);
         });
   };
};

export const API_LIST_GENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=1f54bd990f1cdfb230adb312546d765d";