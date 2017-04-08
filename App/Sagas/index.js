import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { SessionTypes } from '../Redux/SessionRedux'
import { GroupTypes } from '../Redux/GroupRedux'
import { UserTypes } from '../Redux/UserRedux'

/* ------------- Sagas ------------- */

import { loginUser, signupUser, requestUser } from './SessionSagas'
import { requestGroups } from './GroupSagas'
import { requestUsers } from './UserSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures
  ? FixtureAPI
  : API.create('https://babelr.herokuapp.com/')

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action

    // some sagas receive extra parameters in addition to an action
    takeLatest(SessionTypes.SIGNUP_REQUEST, signupUser, api),
    takeLatest(SessionTypes.LOGIN_REQUEST, loginUser, api),
    takeLatest(GroupTypes.REQUEST_GROUPS, requestGroups, api),
    takeLatest(SessionTypes.LOGIN_SUCCESS, requestUser, api),
    takeLatest(UserTypes.REQUEST_USERS, requestUsers, api)
  ]
}
