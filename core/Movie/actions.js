import { 
  CALL_TOP, 
  ADD_MOVIE, 
  ADD_SEARCH, 
  ADD_SEARCH_RESULTS, 
  ADD_VIDEO, 
  ADD_SNACKBAR, 
  CALL_ID, 
  CALL_REVIEW, 
  CALL_VIDEO, 
  CALL_RECOMMEN, 
  CALL_GENRE, 
  CALL_SEARCH,
  CALL_MOVIE_GENRE
} from './types';

/*
  Actions call...
      Son actions que cumplen la funcion de ser utilizadas por saga para hacer cambios
*/
export const callTop = () => {
  return {
    type: CALL_TOP
  }
}
export const callId = (val) => {
  return {
    type: CALL_ID,
    payload: val
  }
}
export const callReview = (val) => {
  return {
    type: CALL_REVIEW,
    payload: val
  }
}
export const callVideo = (val) => {
  return {
    type: CALL_VIDEO,
    payload: val
  }
}
export const callGenre = () => {
  return {
    type: CALL_GENRE
  }
}
export const callSearch = (val) => {
  return {
    type: CALL_SEARCH,
    payload: val
  }
}
export const callMovieGenre = (val) => {
  return {
    type: CALL_MOVIE_GENRE,
    payload: val
  }
}
//actions
export const addMovie = (val) => {
  return {
    type: ADD_MOVIE,
    payload: val
  }
}
export const addSearch = (val) => {
  return {
    type: ADD_SEARCH,
    payload: val
  }
}

export const resetResults = () => {
  return {
    type: ADD_SEARCH_RESULTS,
    payload: []
  }
}
export const resetVideo = () => {
  return {
    type: ADD_VIDEO,
    payload: ''
  }
}
//muestra mensaje de error en la app
export const viewSnackbar = (val) => {
  return {
    type: ADD_SNACKBAR,
    payload: val
  }
}