import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class BabelrLogin extends Component {
  render () {
    return (
      <View>
        <Text>This is the Login Page</Text>
        <Text onPress={Actions.signUp}>Sign Up</Text>
      </View>
    )
  }
}
