//primero importo las const actions a utilizar (no importar las acciones)
import {
  ADD_TOP,
  ADD_MOVIE,
  ADD_SEARCH,
  ADD_SEARCH_RESULTS,
  ADD_GENRE,
  ADD_REVIEWS,
  ADD_VIDEO,
  ADD_SNACKBAR
} from './types';
//creo un estado nuevo
const initialState = {
  top: [],
  movie: [],
  search: '',
  results: [],
  genreResults: [],
  reviews: [],
  video: '',
  snackbar: {
    view: false,
    message: ''
  }
}
/*
  Primero se crea una funcion en la cual se le pasa el estado por default
  y por segunda se pasa el action
*/
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TOP:
      return {
        ...state,
        top: [...state.top, action.payload]
      }
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.payload
      }    
    case ADD_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case ADD_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      }
    case ADD_GENRE:
      return {
        ...state,
        genreResults: action.payload
      }
    case ADD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      }
    case ADD_VIDEO:
      return {
        ...state,
        video:  action.payload
      }
    case ADD_SNACKBAR:
      return {
        ...state,
        snackbar: action.payload
      }
    default:
      return state;
  }
}