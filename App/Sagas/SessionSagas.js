import { put, call } from 'redux-saga/effects'
import SessionActions from '../Redux/SessionRedux'

// attempts to signup
export function * signupUser (api, action) {
  const response = yield call(api.signup, action.newUser)

  const { data: { user, token } } = response
  const currentUser = {
    username: user.username,
    id: user.id,
    preferredLanguage: user.profile
  }

  if (response.ok) {
    // dispatch successful signups
    api.config.setHeader('Authorization', `Token ${token.key}`)
    yield put(SessionActions.receiveCurrentUser(currentUser))
    yield put(SessionActions.loginSuccess(token.key))
  } else {
    // dispatch failure
    yield put(SessionActions.receiveErrors(response.data))
  }
}

// attempts to login
export function * loginUser (api, action) {
  const response = yield call(api.authorize, action.userCredentials)

  const { data } = response
  const currentUser = {
    id: data.user_id,
    preferredLanguage: data.lang,
    email: data.email
  }

  if (response.ok) {
    // dispatch successful logins
    api.config.setHeader('Authorization', `Token ${response.data.token}`)
    yield put(SessionActions.receiveCurrentUser(currentUser))
    yield put(SessionActions.loginSuccess(response.data.token))
  } else {
    // dispatch failure
    yield put(SessionActions.receiveErrors(response.data))
  }
}

// request current user
export function * requestUser (api, action) {
  const response = yield call(api.getUser)
  const { data } = response

  const currentUser = {
    username: data.user.username,
    id: data.user.id,
    preferredLanguage: data.preferred_lang,
    avatarUrl: data.avatar_url
  }

  if (response.ok) {
    yield put(SessionActions.receiveCurrentUser(currentUser))
  } else {
    yield put(SessionActions.receiveErrors(response.data))
  }
}

// update current user
export function * updateUser (api, action) {
  const response = yield call(api.updateUser, action.user)
  const { data } = response

  if (response.ok) {
    const currentUser = {
      username: data.user.username,
      id: data.user.id,
      preferredLanguage: data.preferred_lang,
      avatarUrl: data.avatar_url
    }

    yield put(SessionActions.receiveCurrentUser(currentUser))
  } else {
    yield put(SessionActions.receiveErrors(response.data))
  }
}
