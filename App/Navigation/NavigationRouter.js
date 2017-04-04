import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
// import Styles from './Styles/NavigationContainerStyles'
// import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
// import LaunchScreen from '../Containers/LaunchScreen'
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
// <Scene key='drawer' component={NavigationDrawer} open={false}>
//   <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
//     <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
//   </Scene>
// </Scene>

export default NavigationRouter
