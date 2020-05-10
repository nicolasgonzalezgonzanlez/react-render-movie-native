import {
  ADD_TOP,
  ADD_MOVIE,
  ADD_SEARCH_RESULTS,
  ADD_GENRES,
  ADD_GENRE,
  ADD_REVIEWS,
  ADD_VIDEO,
  ADD_SNACKBAR
} from './types';
import {
  getMovieTop,
  getMovieId,
  getSearch,
  getGenres,
  getMovieGenre,
  getReviews,
  getVideo
} from './services';
import { put, all, call } from 'redux-saga/effects';

//Container HOME (all called to the api)
// trae de la api las peliculas mas buscadas

export function* apiTop() {
    try {
      const response = yield call(getMovieTop)
      yield all(response.data.results.map((value)=>{
        if(value.title && value.media_type) {
          return put({
            type: ADD_TOP,
            payload: {
              title: value.title,
              backdrop_path: value.backdrop_path,
              media_type: value.media_type,
              id: value.id
            }
          })
        }
      }))
    } catch (err) {
      yield put({
        type: ADD_SNACKBAR,
        payload: {
          view: true,
          message: 'No pudimos trarte las peliculas Top.' 
        }
      })
    }
}

//trae un listado de peliculas segun un "nombre"

export function* apiSearch({payload}) {
  try {
    const response = yield call(getSearch, payload)
    if (response.data.results.length == 0) {
      yield put({
        type: ADD_SNACKBAR,
        payload: {
          view: true,
          message: '¿Seguro es una pelicula?'
        }
      })
    } else {
      yield put({
        type: ADD_SEARCH_RESULTS,
        payload: response.data.results
      })
    }
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¿Seguro es una pelicula?'
      }
    })
  }
}


//Container ID (all called to the api)

export function* apiMovieId({payload}) {
  try {
    const response = yield call(getMovieId, payload)
    yield put({
          type: ADD_MOVIE,
          payload: {
            backdrop_path: response.data.backdrop_path,
            genres: response.data.genres,
            overview: response.data.overview,
            poster_path: response.data.poster_path,
            release_data: response.data.release_data,
            runtime: response.data.runtime,
            title: response.data.title,
            vote_average: response.data.vote_average,
            release_date: response.data.release_date
          }
        })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¿esta pelicula existe?'
      }
    })
  }
}

//obtiene una lista de comentarios de una pelicula en concreto
export function* apiMovieReviews({payload}) {
  try {
    const response = yield call(getReviews, payload)
    yield put({
          type: ADD_REVIEWS,
          payload: response.data.results
        })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No hay reviews!'
      }
    })
  }
}

//obtiene un trailer de una pelicula
export function* apiVideo({payload}) {
  try {
    const response = yield call(getVideo, payload)
    yield all(response.data.results.map((value) => {
      if (value.name.includes('Trailer')) {
        return put({
          type: ADD_VIDEO,
          payload: value.key
        }) 
      }
    }))
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No hay videos!'
      }
    })
  }
}

//obtiene una lista de generos
export function* apiGenres() {
  try {
    const response = yield call(getGenres)
    yield put({
      type: ADD_GENRES,
      payload: response.data.genres
    })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: '¡No traje generos!'
      }
    })
  }
}


// called api (component MOVIE)

//obtiene una lista de peliculas segun el genero


export function* apiMovieGenre({payload}) {
  try {
    const response = yield call(getMovieGenre, payload)
    yield put({
      type: ADD_GENRE,
      payload: response.data.results
    })
  } catch (err) {
    yield put({
      type: ADD_SNACKBAR,
      payload: {
        view: true,
        message: 'La busqueda por genero ha fallado' 
      }
    })
  }
}
