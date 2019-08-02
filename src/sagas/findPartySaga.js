import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchMyParty } from '../services/api';
import { history } from '../store/configureStore';

export function* findMyPartyWorkerSaga(action) {
  try {
    const response = yield call(fetchMyParty, action.payload);
    if (response.status === 200) {
      console.log(response)
      history.push('/myparty');
    }
  } catch (error) {
    yield put({ type: 'PARTY_NAME_FAILED', payload: 'There is no such party' });
  }
}

export function* findMyPartyWatcherSaga() {
  console.log('ok')
  yield takeEvery('findMyParty', findMyPartyWorkerSaga);
}
