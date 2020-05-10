/*
  Aca se agregan la cantidad de const que necesites, 
  la idea de hacerlo de esta forma es evitar problemas de tipado
  y facilitar el mantenimiento del codigo
*/
export const ADD_TOP = 'ADD_TOP';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULT';

// trae una lista de peliculas segun genero
export const ADD_GENRE = 'ADD_GENRE';
//Traer comentarios
export const ADD_REVIEWS = 'ADD_REVIEWS';
//trae un trailer de una pelicula
export const ADD_VIDEO = 'ADD_VIDEO';
//errores
export const ADD_SNACKBAR = 'ADD_SNACKBAR';

/*
   Type Call...
      Son types que funcionan para controlar las actions que van a ser llamadas por saga
*/
export const CALL_TOP = 'CALL_TOP';
export const CALL_ID = 'CALL_ID';
export const CALL_REVIEW = 'CALL_REVIEW';
export const CALL_VIDEO = 'CALL_VIDEO';
export const CALL_GENRE = 'CALL_GENRE';
export const CALL_SEARCH = 'CALL_SEARCH';
export const CALL_MOVIE_GENRE = 'CALL_MOVIE_GENRE';

