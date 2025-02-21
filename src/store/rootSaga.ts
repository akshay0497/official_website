import { all } from 'redux-saga/effects';
import { postsSaga } from './sagas/postsSaga';

export default function* rootSaga() {
  yield all([postsSaga()]);
}