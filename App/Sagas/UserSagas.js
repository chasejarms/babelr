import { put, call } from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'

// attempts to get all the users associated with a query
export function * requestUsers (api, action) {
  const response = yield call(api.getUsers, action.userQuery)
  // keeping this here as an example of logging something to reactotron
  // console.tron.log(response)

  if (response.ok) {
    yield put(UserActions.receiveUsers(response.data))
  } else {
    yield put(UserActions.receiveUserErrors(response.data))
  }
}
