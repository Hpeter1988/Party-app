import { all, fork } from 'redux-saga/effects';
import { findMyPartyWatcherSaga } from './findPartySaga';

export default function* rootSaga() {
  console.log('adawd')
  yield all([
    fork(findMyPartyWatcherSaga),
  ]);
}
