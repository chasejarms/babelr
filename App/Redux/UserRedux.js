import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestUsers: ['userQuery'],
  receiveUsers: ['users'],
  receiveUserErrors: ['errors']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  users: null,
  errors: null
})

/* ------------- Reducers ------------- */

// we've received the users we searched for
export const success = (state, { users }) =>
  state.merge({ users })

// we've had an error and didn't get the users
export const failure = (state, { errors }) =>
  state.merge({ errors })

// we've logged out
export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVE_USERS]: success,
  [Types.RECEIVE_USER_ERRORS]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */
