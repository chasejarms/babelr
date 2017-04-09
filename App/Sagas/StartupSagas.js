import { put, call } from 'redux-saga/effects'
import StartupActions from '../Redux/StartupRedux'

// process STARTUP actions
export function * startup (action) {
  yield put(StartupActions.rehydrateSuccess())
}

export function * setAuthHeader (api, action) {
  yield call(api.config.setHeader, 'Authorization', `Token ${action.token}`)
  yield put(StartupActions.startupSuccess())
}
