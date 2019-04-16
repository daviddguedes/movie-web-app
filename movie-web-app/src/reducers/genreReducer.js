import { GET_LIST_GENRE } from "../constants";

const INITIAL_STATE = {
   genres: {}
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case GET_LIST_GENRE:
         return {
            ...state,
            genres: action.data.genres
         };

      default:
         return state
   }
}