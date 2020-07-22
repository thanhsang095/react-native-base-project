import AsyncStorage from "@react-native-community/async-storage";
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthInfoProvider } from "~/app/authInfoProvider";
import { storeKey } from "~/app/constants";
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* appStoreUserSaga(action) {
  try {
    AuthInfoProvider.setAuth(action.user.jwtToken)
    yield call(AsyncStorage.setItem, storeKey.currentUser, JSON.stringify(action.user));
    yield put(actions.appSetUser(action.user));
  } catch (error) {
    yield put(actions.appError(error))
  }
}

function* appGetUserSaga(action) {
  try {
    const _user = yield call(AsyncStorage.getItem, storeKey.currentUser);
    const user = JSON.parse(_user)
    AuthInfoProvider.setAuth(user.jwtToken)
    yield put(actions.appSetUser(user));
  } catch (error) {
    yield put(actions.appGetUserFailure(error))
  }
}

function* appLogoutSaga(action) {
  try {
    yield call(AsyncStorage.removeItem, storeKey.currentUser)
    AuthInfoProvider.setAuth()
    yield put(actions.appLogoutSuccess());
  } catch (error) {
    yield put(actions.appLogoutFailure(error))
  }
}

export default [
  takeLatest(actionTypes.APP_STORE_USER, appStoreUserSaga),
  takeLatest(actionTypes.APP_GET_USER, appGetUserSaga),
  takeLatest(actionTypes.APP_LOGOUT_REQUEST, appLogoutSaga),
]
