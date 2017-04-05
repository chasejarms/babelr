import test from 'ava'
import { put, call } from 'redux-saga/effects'
import FixtureAPI from '../../App/Services/FixtureApi'
import { loginUser } from '../../App/Sagas/LoginSagas'
import LoginActions from '../../App/Redux/LoginRedux'

const stepper = (fn) => (mock) => fn.next(mock).value
const goodReq = { username: 'guest', password: 'password' }
const badReq = { username: '', password: '' }

test('first calls API', (t) => {
  const step = stepper(loginUser(FixtureAPI, goodReq))
  // first yield is API
  t.deepEqual(step(), call(FixtureAPI.authorize, goodReq))
})

test('success', (t) => {
  const response = FixtureAPI.authorize(goodReq)
  const step = stepper(loginUser(FixtureAPI, goodReq))
  // first step API
  step()

  // Second step successful return
  t.deepEqual(step(response), put(LoginActions.loginSuccess(response.user)))
})

test('failure', (t) => {
  const response = FixtureAPI.authorize(badReq)
  const step = stepper(loginUser(FixtureAPI, badReq))

  step()

  t.deepEqual(step(response), put(LoginActions.loginFailure(response.errors)))
})
