import { put, call } from 'redux-saga/effects'
import SessionActions from '../Redux/SessionRedux'

// attempts to signup
export function * signupUser (api, action) {
  const response = yield call(api.signup, action.newUser)

  if (response.ok) {
    // dispatch successful signups
    yield put(SessionActions.receiveCurrentUser(response.data.user))
  } else {
    // dispatch failure
    yield put(SessionActions.receiveErrors(response.data))
  }
}

// attempts to login
export function * loginUser (api, action) {
  const response = yield call(api.authorize, action.userCredentials)

  if (response.ok) {
    // dispatch successful logins
    yield put(SessionActions.loginSuccess(response.data.token))
  } else {
    // dispatch failure
    yield put(SessionActions.receiveErrors(response.data))
  }
}
