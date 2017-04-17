import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { SessionTypes } from '../Redux/SessionRedux'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestCurrentGroup: ['groupId', 'language'],
  receiveGroup: ['group'],
  requestMessageCreation: ['messageDetail'],
  receiveNewMessage: ['message'],
  receiveMessageErrors: ['errors']
})

export const MessageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  id: null,
  title: null,
  messages: [],
  subscribers: [],
  messageErrors: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to get the messages
export const request = (state) => state.merge({ fetching: true })

// receive all messages for a particular chat
export const receiveGroup = (state, { group }) => {
  return state.merge({ ...group })
}

// receive a new message for a particular chat
export const receiveNewMessage = (state, { message }) => {
  const newMessages = [...state.messages, message]
  return state.merge({ messages: newMessages })
}

export const failure = (state, { errors }) => {
  return state.merge({ messageErrors: errors })
}

export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVE_GROUP]: receiveGroup,
  [Types.RECEIVE_NEW_MESSAGE]: receiveNewMessage,
  [Types.RECEIVE_MESSAGE_ERRORS]: failure,
  [SessionTypes.LOGOUT]: logout
})

/* ------------- Selectors ------------- */
