import { put, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * signupUser (api, request) {
  const response = yield call(api.signup, request)

  if (response.ok) {
    // dispatch successful logins
    yield put(LoginActions.signupSuccess(response.user))
  } else {
    // dispatch failure
    yield put(LoginActions.loginFailure(response.errors))
  }
}
