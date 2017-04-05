import { put, call } from 'redux-saga/effects'
import SessionActions from '../Redux/SessionRedux'

// attempts to signup
export function * signupUser (api, request) {
  const response = yield call(api.signup, request)

  if (response.ok) {
    // dispatch successful signups
    yield put(SessionActions.updateUser(response.user))
  } else {
    // dispatch failure
    yield put(SessionActions.receiveErrors(response.errors))
  }
}

// attempts to login
export function * loginUser (api, userCredentials) {
  const response = yield call(api.authorize, userCredentials)

  if (response.ok) {
    // dispatch successful logins
    yield put(SessionActions.loginSuccess(response.token))
  } else {
    // dispatch failure
    yield put(SessionActions.receiveErrors(response.errors))
  }
}
