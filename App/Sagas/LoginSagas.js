import { put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * loginUser (api, { username, password }) {
  const response = yield call(api.authorize, username, password)

  if (response.ok) {
    // dispatch successful logins
    yield put(LoginActions.loginSuccess(response.user))
  } else {
    // dispatch failure
    yield put(LoginActions.loginFailure(response.errors))
  }
}
