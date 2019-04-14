import { GET_LIST_MOVIES } from './../constants';
import axios from 'axios';
import { API_URL } from './../constants';

export const fetchMovies = (movies) => {
   return {
      type: GET_LIST_MOVIES,
      movies
   }
};

export const listMoviesAction = () => {
   return (dispatch) => {
      return axios.get(`${API_URL}/movies`)
         .then(response => {
            dispatch(fetchMovies(response.data))
         })
         .catch(error => {
            throw (error);
         });
   };
};