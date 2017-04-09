import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  setAuthHeader: ['token'],
  rehydrateSuccess: null,
  startupSuccess: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  rehydrated: false,
  readyRender: false
})

/* ------------- Reducers ------------- */

// we've successfully rehydrated
const success = (state) => state.merge({ rehydrated: true })
const render = (state) => state.merge({ readyRender: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REHYDRATE_SUCCESS]: success,
  [Types.STARTUP_SUCCESS]: render
})
