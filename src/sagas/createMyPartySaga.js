import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchCrateMyParty } from '../services/api';
import { history } from '../store/configureStore';

export function* createMyPartyWorkerSaga(action) {
  try {
    const response = yield call(fetchCrateMyParty, action.payload);
    if (response.status === 200) {
      localStorage.setItem('PARTY', response.data.partyName);
      history.push('/myparty');
    }
  } catch (error) {
    yield put({ type: 'PARTY_NAME_FAILED', payload: 'There is an other party under this name' });
  }
}

export function* createMyPartyWatcherSaga() {
  yield takeEvery('createMyParty', createMyPartyWorkerSaga);
}
