import { put, call } from 'redux-saga/effects'
import MessageActions from '../Redux/MessageRedux'

// attempts to get groups for a particular user, representing by their token
export function * requestCurrentGroup (api, action) {
  const response = yield call(api.requestCurrentGroup, action.groupId, `${action.language}_text`)
  if (response.ok) {
    // dispatch the relevant groups
    const messages = response.data.messages.reverse()
    const group = Object.assign({}, response.data, { messages })

    yield put(MessageActions.receiveGroup(group))
  } else {
    // dispatch failure
    yield put(MessageActions.receiveMessageErrors(response.data))
  }
}

export function * requestNewMessageCreation (api, action) {
  const response = yield call(api.sendNewMessage, action.messageDetail)
  if (response.ok) {
    yield put(MessageActions.receiveNewMessage(response.data))
  } else {
    yield put(MessageActions.receiveMessageErrors(response.data))
  }
}
