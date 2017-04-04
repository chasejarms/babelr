import { put, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * loginUser (api, request) {
  const response = yield call(api.authorize, request)

  if (response.ok) {
    // dispatch successful logins
    yield put(LoginActions.loginSuccess(response.user))
  } else {
    // dispatch failure
    yield put(LoginActions.loginFailure(response.errors))
  }
}
