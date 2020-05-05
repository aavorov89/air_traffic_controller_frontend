import { put, call } from 'redux-saga/effects'
import { delay } from './async'

import { updateStatus } from "./actions";

export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/planes")
    return await response.json();
  } catch (e) {
  }
};

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

export function* enqueue(id) {
  fetch( `http://localhost:3000/planes/${id}/start`, {
    method: 'POST',
    headers: myHeaders,
    cache: 'default',
  })

  yield call(delay, 3000)

  const url = `http://localhost:3000/planes/${id}`
  let i = 0
  while (i < 20) {
    const finished = yield call( hasJobFinished, url)
    if (finished) {
      return true
    }
    i++
    yield call(delay, 3000)
  }
  return false;
}

function *hasJobFinished( url ) {
  const response = yield call(fetch, url);
  const result = yield call([response, 'json']);

  yield put(updateStatus({ id: result['id'], status: result['status'] }));

  return result['status'] === 'completed';
}