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
      return axios.get(`${API_URL}/genres`)
         .then(response => {
            dispatch(fetchGenres(response.data))
         })
         .catch(error => {
            throw (error);
         });
   };
};