import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from "~/api";
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* signupSaga(action) {
  try {
    const data = yield call(api.auth.register(action.params))
    yield put(actions.signupSuccess(data.user));
  } catch (error) {
    yield put(actions.signUpFailed(error))
  }
}

export default [
  takeLatest(actionTypes.SIGNUP_REQUEST, signupSaga),
]