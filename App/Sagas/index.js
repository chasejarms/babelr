import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'
import { SignupTypes } from '../Redux/SignupRedux'

/* ------------- Sagas ------------- */

import { loginUser } from './LoginSagas'
import { signupUser } from './SignupSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures
  ? FixtureAPI
  : API.create('https://babler.herokuapp.com/')

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action

    // some sagas receive extra parameters in addition to an action
    takeLatest(SignupTypes.SIGNUP_REQUEST, signupUser, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginUser, api)
  ]
}
