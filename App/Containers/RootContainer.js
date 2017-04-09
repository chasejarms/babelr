import React, { Component } from 'react'
import { View, Text } from 'react-native' // will need to add AsyncStorage when needed
import NavigationRouter from '../Navigation/NavigationRouter'
import BabelrStatusBar from '../Components/BabelrStatusBar'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import Colors from '../Themes/Colors'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.rehydrated && nextProps.token) {
      this.props.setAuthHeader(nextProps.token)
    } else if (nextProps.rehydrated && !nextProps.token) {
      this.props.startupSuccess()
    }
  }

  rehydrated () {
    if (this.props.readyRender) {
      return <NavigationRouter />
    } else {
      // insert better loading screen here
      return <View><Text>Loading...</Text></View>
    }
  }

  render () {
    // AsyncStorage.clear((errs) => {
    //   console.tron.log(errs)
    // })
    return (
      <View style={styles.applicationView}>
        <BabelrStatusBar
          backgroundColor={Colors.darkGrey}
          barStyle='light-content'
          />
        {this.rehydrated()}
      </View>
    )
  }
}

const mapStateToProps = ({session, startup}) => ({
  token: session.token,
  rehydrated: startup.rehydrated,
  readyRender: startup.readyRender
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  setAuthHeader: (token) => dispatch(StartupActions.setAuthHeader(token)),
  startupSuccess: () => dispatch(StartupActions.startupSuccess())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)

// move these back into the View if you want to use the default ignite page
// As well, make sure to add in status bar from react-native
