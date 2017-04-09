import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    startup: require('./StartupRedux').reducer,
    session: require('./SessionRedux').reducer,
    groups: require('./GroupRedux').reducer,
    userSearch: require('./UserRedux').reducer,
    currentMessages: require('./MessageRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
