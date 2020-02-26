import { SagaIterator } from "@redux-saga/types";
import { all } from "redux-saga/effects";

export default function* rootSagas(): SagaIterator {
  yield all([]);
}
