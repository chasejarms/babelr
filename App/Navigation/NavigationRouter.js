import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import BabelrLogin from '../Containers/BabelrLogin'
import BabelrSignUp from '../Containers/BabelrSignUp'
import ChatPages from '../Containers/ChatPages'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene key='login' component={BabelrLogin} title='Login' initial />
          <Scene key='signUp' component={BabelrSignUp} title='Sign Up' />
          <Scene key='authenticated' hideNavBar>
            <Scene key='chatPages' component={ChatPages} title='ChatPages' initial />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
