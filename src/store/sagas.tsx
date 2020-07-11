import { all, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { ACTIONS_TYPES } from "./actions";

function* initialSaga(): SagaIterator {
  try {
    yield put({ type: ACTIONS_TYPES.INITIAL });
  } catch (error) {
    console.log("error saga", error);
  }
}

export function* rootSaga(): Generator {
  yield all([initialSaga()]);
}
