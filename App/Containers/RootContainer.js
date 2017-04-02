import React, { Component } from 'react'
import { View } from 'react-native'
// import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import LandingPage from './LandingPage.js'
import ProgressBarBackground from '../Components/ProgressBarBackground.js'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <ProgressBarBackground />
        <LandingPage />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)

// move these back into the View if you want to use the default ignite page
// As well, make sure to add in status bar from react-native

// <StatusBar barStyle='light-content' />
// <NavigationRouter />
