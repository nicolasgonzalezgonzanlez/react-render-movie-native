import { all, takeEvery } from 'redux-saga/effects';

/*
    takeEvery:
        despacha multiples async a la vez.
    takeLastest:
        despacha una accion async a la vez.(Hasta que no se resuelva la primera, no ejecuta la segunda).
*/

import {
  CALL_TOP,
  CALL_ID,
  CALL_REVIEW,
  CALL_VIDEO,
  CALL_GENRE,
  CALL_SEARCH,
  CALL_MOVIE_GENRE
} from './types';

import {
  apiTop,
  apiMovieId,
  apiMovieReviews,
  apiVideo,
  apiGenres,
  apiSearch,
  apiMovieGenre
} from './saga';

function* rootSaga() {
  yield all([
    takeEvery(CALL_TOP, apiTop),
    takeEvery(CALL_ID, apiMovieId),
    takeEvery(CALL_REVIEW, apiMovieReviews),
    takeEvery(CALL_VIDEO, apiVideo),
    takeEvery(CALL_GENRE, apiGenres),
    takeEvery(CALL_SEARCH, apiSearch),
    takeEvery(CALL_MOVIE_GENRE, apiMovieGenre)
  ])
}

export default rootSaga;
