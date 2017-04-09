import test from 'ava'
import { put, call } from 'redux-saga/effects'
import FixtureAPI from '../../App/Services/FixtureApi'
import { loginUser } from '../../App/Sagas/SessionSagas'
import SessionActions from '../../App/Redux/SessionRedux'

const stepper = (fn) => (mock) => fn.next(mock).value
const goodReq = { username: 'guest', password: 'password' }
const badReq = { username: 'asdf', password: 'asdf' }

test('first calls API', (t) => {
  const step = stepper(loginUser(FixtureAPI, {userCredentials: goodReq}))
  // first yield is API
  t.deepEqual(step(), call(FixtureAPI.authorize, goodReq))
})

test('success', (t) => {
  const response = FixtureAPI.authorize(goodReq)
  const step = stepper(loginUser(FixtureAPI, {userCredentials: goodReq}))
  // first step API
  step()
  step(response)
  // Second step successful return
  t.deepEqual(step(response), put(SessionActions.loginSuccess(response.data.token)))
})

test('failure', (t) => {
  const response = FixtureAPI.authorize(badReq)
  const step = stepper(loginUser(FixtureAPI, badReq))

  step()

  t.deepEqual(step(response), put(SessionActions.receiveErrors(response.data)))
})
