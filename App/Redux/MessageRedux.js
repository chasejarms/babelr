import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  selectGroup: ['groupId', 'title'],
  requestMessages: ['groupId', 'language'],
  receiveMessages: ['messages'],
  requestMessageCreation: ['messageDetail'],
  receiveNewMessage: ['message'],
  recieveMessageErrors: ['errors'],
  logout: null
})

export const MessageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  groupId: null,
  title: null,
  messages: [],
  messageErrors: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to get the messages
export const request = (state) => state.merge({ fetching: true })

const setGroup = (state, { groupId, title }) => {
  return state.merge({ groupId, title })
}

// receive all messages for a particular chat
export const receiveMessages = (state, { messages }) => {
  return state.merge({ messages })
}

// receive a new message for a particular chat
export const receiveNewMessage = (state, { message }) => {
  const newMessages = [...this.state.messages, message]
  return state.merge({ messages: newMessages })
}

export const failure = (state, { errors }) => {
  return state.merge({ messageErrors: errors })
}

export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECT_GROUP]: setGroup,
  [Types.RECEIVE_MESSAGES]: receiveMessages,
  [Types.RECEIVE_NEW_MESSAGE]: receiveNewMessage,
  [Types.RECEIVE_MESSAGE_ERRORS]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */
