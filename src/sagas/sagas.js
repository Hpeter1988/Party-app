import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* Welcome() {
  try {
    const response = yield call(API.Welcome);
    yield put({
      type: 'WELCOME_SUCCEEDED',
      payload: response.name,
    });
  } catch (error) {
    yield put({
      type: 'WELCOME_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('WELCOME_REQUESTED', Welcome);
}
