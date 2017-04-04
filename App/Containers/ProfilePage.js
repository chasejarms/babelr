import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class ProfilePage extends Component {
  render () {
    return (
      <View>
        <Text>This is the user profile page</Text>
        <Text onPress={Actions.login}>Click here to log out</Text>
      </View>
    )
  }
}
