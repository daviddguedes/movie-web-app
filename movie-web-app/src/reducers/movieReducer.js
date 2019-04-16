import { GET_LIST_MOVIES } from "../constants";

const INITIAL_STATE = {
   movies: {
      dates: {
         maximum: "",
         minimum: ""
      },
      page: 1,
      results: [],
      total_pages: null,
      total_results: null
   }
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case GET_LIST_MOVIES:
         return {
            ...state,
            movies: action.movies
         };

      default:
         return state
   }
}