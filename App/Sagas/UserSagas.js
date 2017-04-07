// import { put, call } from 'redux-saga/effects'
// import UserActions from '../Redux/UserActions'
//
// // attempts to get all the users associated with a query
// export function * requestUsers (api, action) {
//   const response = yield call(api.getUsers, action.queryString)
//
//   if (response.ok) {
//     yield put(UserActions.receiveUsers(response.data.users))
//   } else {
//     yield put(UserActions.receiveUserErrors(response.data))
//   }
// }
