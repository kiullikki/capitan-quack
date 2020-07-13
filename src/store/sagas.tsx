import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SagaIterator } from "redux-saga";
import {
  ACTIONS_TYPES,
  fetchCarsSuccessAction,
  fetchCarsErrorAction,
  fetchCarsStartAction,
} from "./actions";
import { API_BASE_URL } from "../constants";

function* getCarsSaga(): SagaIterator {
  try {
    yield put(fetchCarsStartAction());
    const { data } = yield call(axios.get, API_BASE_URL);
    yield put(fetchCarsSuccessAction(data));
  } catch {
    yield put(fetchCarsErrorAction());
  }
}

export function* rootSaga(): Generator {
  yield all([takeLatest(ACTIONS_TYPES.FETCH_CARS, getCarsSaga)]);
}
