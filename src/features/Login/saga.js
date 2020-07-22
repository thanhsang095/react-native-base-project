import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from "~/api";
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* loginSaga(action) {
  try {
    const data = yield call(api.auth.login(action.params))
    yield put(actions.loginSuccess(data.user));
  } catch (error) {
    yield put(actions.loginFailed(error))
  }
}

export default [
  takeLatest(actionTypes.LOGIN_REQUEST, loginSaga),
]