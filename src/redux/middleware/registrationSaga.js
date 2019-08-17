import { takeLatest, call, put, putResolve } from "redux-saga/effects";
import { REGISTER_USER } from "./../constants/actionTypes";
import {
  registerUserSuccess,
  registerUserFailure
} from "./../actionCreator/registrationAction";
import RegistrationAPI from "./../../services/registrationAPI";

export function* registerUserAsync(action) {
  try {
    const response = yield call(RegistrationAPI.register, action.userData);
    yield put(registerUserSuccess(response));
  } catch (error) {
    yield putResolve(registerUserFailure(error));
    
  }
}

export function* watchRegisterUserAsync() {
  yield takeLatest(REGISTER_USER, registerUserAsync);
}
