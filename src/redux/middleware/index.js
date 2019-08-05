import { all } from "redux-saga/effects";
import { watchRegisterUserAsync } from "./registrationSaga";

function* rootSaga() {
  yield all([watchRegisterUserAsync()]);
}
export default rootSaga;
