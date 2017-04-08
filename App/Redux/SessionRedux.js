import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['userCredentials'],
  loginSuccess: ['token'],
  signupRequest: ['newUser'],
  receiveCurrentUser: ['user'],
  receiveErrors: ['errors'],
  logout: null
})

export const SessionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  errors: null,
  token: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { token }) =>
  state.merge({ fetching: false, errors: null, token })

// receive current user and log them in
const updateUser = (state, { user }) =>
  state.merge({ user })

// we've had a problem
export const failure = (state, { errors }) =>
  state.merge({ fetching: false, errors })

// we've logged out
export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.RECEIVE_CURRENT_USER]: updateUser,
  [Types.RECEIVE_ERRORS]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (loginState) => loginState.user !== null
