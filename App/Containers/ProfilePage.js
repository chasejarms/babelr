import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SessionActions from '../Redux/SessionRedux'

class ProfilePage extends Component {

  handleLogout = () => {
    this.props.logout()
    Actions.login()
  }

  render () {
    return (
      <View>
        <Text>This is the user profile page</Text>
        <Text onPress={this.handleLogout}>Click here to log out</Text>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(SessionActions.logout())
})

export default connect(
  undefined,
  mapDispatchToProps
)(ProfilePage)
