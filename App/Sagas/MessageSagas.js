import { put, call } from 'redux-saga/effects'
import MessageActions from '../Redux/MessageRedux'

// attempts to get groups for a particular user, representing by their token
export function * requestMessages (api, action) {
  const response = yield call(api.requestMessages, action.groupId, action.language)
  if (response.ok) {
    // dispatch the relevant groups
    yield put(MessageActions.receiveMessages(response.data.messages))
  } else {
    // dispatch failure
    yield put(MessageActions.receiveMessageErrors(response.data))
  }
}

export function * requestNewMessageCreation (api, action) {
  const response = yield call(api.requestNewMessageCreation, action.groupDetail)
  console.tron.log(response)
  if (response.ok) {
    yield put(MessageActions.receiveNewMessage(response.data))
  } else {
    yield put(MessageActions.receiveMessageErrors(response.data))
  }
}
