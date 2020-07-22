import { all } from 'redux-saga/effects';
import appSaga from '~/app/saga';
import loginSaga from '~/features/Login/saga';
import signupSaga from '~/features/Signup/saga';

function* rootSaga() {
  yield all([
    ...appSaga,
    ...signupSaga,
    ...loginSaga,
  ])
}

export default rootSaga;
