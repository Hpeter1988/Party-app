import { all, fork } from 'redux-saga/effects';
import { findMyPartyWatcherSaga } from './findPartySaga';
import { createMyPartyWatcherSaga } from './createMyPartySaga';

export default function* rootSaga() {
  yield all([
    fork(findMyPartyWatcherSaga),
    fork(createMyPartyWatcherSaga),
  ]);
}
