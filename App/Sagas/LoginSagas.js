import { put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * login (api, { username, password }) {
  const response = yield call(api.loginUser, username, password)

  if (response.ok) {
    // dispatch successful logins
    yield put(LoginActions.loginSuccess(response.user))
  } else {
    // dispatch failure
    yield put(LoginActions.loginFailure(response.errors))
  }
}
