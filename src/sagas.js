import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import { REQUEST_API_DATA, ENQUEUE_JOB, receiveApiData } from "./actions";
import { fetchData, enqueue } from './api'

function* getApiData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
  }
}

function* enqueueJob(action) {
  const { id } = action;
  yield call(enqueue, id);
}

export default function* watchAll () {
  yield all([
    takeLatest(REQUEST_API_DATA, getApiData),
    takeEvery(ENQUEUE_JOB, enqueueJob)
  ]);
}