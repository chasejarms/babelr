import { put, call } from 'redux-saga/effects'
import GroupActions from '../Redux/GroupRedux'

// attempts to get groups for a particular user, representing by their token
export function * requestGroups (api, action) {
  const response = yield call(api.getGroups, action.token)
  if (response.ok) {
    // dispatch the relevant groups
    yield put(GroupActions.receiveGroups(response.data))
  } else {
    // dispatch failure
    yield put(GroupActions.receiveGroupErrors(response.data))
  }
}
