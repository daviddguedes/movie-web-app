import axios from 'axios';
import { API_URL } from './../constants';

export const listMovies = () => {
   return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/movies`)
         .then(response => resolve(response))
         .catch(error => reject(error));
   })
}

export const findMovie = expression => {
   return expression;
}