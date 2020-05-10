import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=d4be0a070609a82f261c06e7d2bd0600';

export const getMovieTop = () => axios.get(`${url}trending/all/week${apiKey}`);
export const getMovieId = (id) => axios.get(`${url}movie/${id}${apiKey}`);
export const getSearch = (key) => axios.get(`${url}search/multi${apiKey}&query=${key}`);
//trae una lista de peliculas segun el genero
export const getMovieGenre = (genre) => axios.get(`${url}discover/movie${apiKey}&sort_by=popularity.desc&page=1&with_genres=${genre}`);
//trae comentarios de una pelicula en concreto
export const getReviews = (idPelicula) => axios.get(`${url}movie/${idPelicula}/reviews${apiKey}&page=1`);
//trae el trailer offical de una pelicula
export const getVideo = (idPelicula) => axios.get(`${url}movie/${idPelicula}/videos${apiKey}&language=en-EU`);
