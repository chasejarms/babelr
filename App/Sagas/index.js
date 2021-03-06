import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { SessionTypes } from '../Redux/SessionRedux'
import { GroupTypes } from '../Redux/GroupRedux'
import { UserTypes } from '../Redux/UserRedux'
import { MessageTypes } from '../Redux/MessageRedux'

/* ------------- Sagas ------------- */

import { startup, setAuthHeader } from './StartupSagas'
import { loginUser, signupUser, requestUser, updateUser } from './SessionSagas'
import { requestGroups, requestGroupCreation } from './GroupSagas'
import { requestUsers } from './UserSagas'
import { requestCurrentGroup, requestNewMessageCreation } from './MessageSagas'

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
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(StartupTypes.SET_AUTH_HEADER, setAuthHeader, api),
    takeLatest(SessionTypes.SIGNUP_REQUEST, signupUser, api),
    takeLatest(SessionTypes.LOGIN_REQUEST, loginUser, api),
    takeLatest(SessionTypes.UPDATE_USER, updateUser, api),
    takeLatest(GroupTypes.REQUEST_GROUPS, requestGroups, api),
    takeLatest(GroupTypes.REQUEST_GROUP_CREATION, requestGroupCreation, api),
    takeLatest(SessionTypes.LOGIN_SUCCESS, requestUser, api),
    takeLatest(UserTypes.REQUEST_USERS, requestUsers, api),
    takeLatest(MessageTypes.REQUEST_CURRENT_GROUP, requestCurrentGroup, api),
    takeLatest(MessageTypes.REQUEST_MESSAGE_CREATION, requestNewMessageCreation, api)
  ]
}
