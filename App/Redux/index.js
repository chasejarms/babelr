import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    session: require('./SessionRedux').reducer,
    groups: require('./GroupRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
