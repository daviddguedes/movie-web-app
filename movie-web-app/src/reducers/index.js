import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import slideReducer from './slideReducer';
import genreReducer from './genreReducer';

export default combineReducers({
   movieReducer,
   slideReducer,
   genreReducer
})