import { put, call } from 'redux-saga/effects'
import MessageActions from '../Redux/MessageRedux'

// attempts to get groups for a particular user, representing by their token
export function * requestCurrentGroup (api, action) {
  const response = yield call(api.requestCurrentGroup, action.groupId, `${action.language}_text`)
  if (response.ok) {
    // dispatch the relevant groups
    yield put(MessageActions.receiveGroup(response.data))
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
