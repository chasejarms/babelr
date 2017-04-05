import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/SessionRedux'

test('attempt', (t) => {
  const state = reducer(INITIAL_STATE, Actions.loginRequest('u', 'p'))

  t.true(state.fetching)
})

test('success', (t) => {
  const state = reducer(INITIAL_STATE, Actions.loginSuccess('a1b2c3'))

  t.is(state.token, 'a1b2c3')
})

test('failure', (t) => {
  const state = reducer(INITIAL_STATE, Actions.receiveErrors('69'))

  t.false(state.fetching)
  t.is(state.errors, '69')
})

test('logout', (t) => {
  const loginState = reducer(INITIAL_STATE, Actions.loginSuccess('hi'))
  const state = reducer(loginState, Actions.logout())

  t.falsy(state.username)
})
