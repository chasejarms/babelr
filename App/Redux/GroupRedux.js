import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestGroups: null,
  requestGroupCreation: ['newGroupInfo'],
  receiveCreatedGroup: ['group'],
  receiveGroups: ['groupItems'],
  receiveGroupErrors: ['errors'],
  logout: null
})

export const GroupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  groupItems: [],
  errors: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to get the groups
export const request = (state) => state.merge({ fetching: true })

// receive a group that you have created

export const receiveCreatedGroup = (state, { group }) => {
  const newGroupItems = [...state.groupItems, group]
  return state.merge({ groupItems: newGroupItems })
}

// we've successfully logged in
export const success = (state, { groupItems }) =>
  state.merge({ fetching: false, errors: null, groupItems })

// we've had a problem
export const failure = (state, { errors }) =>
  state.merge({ fetching: false, errors })

export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVE_GROUPS]: success,
  [Types.RECEIVE_CREATED_GROUP]: receiveCreatedGroup,
  [Types.REQUEST_GROUPS]: request,
  [Types.RECEIVE_GROUP_ERRORS]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */
