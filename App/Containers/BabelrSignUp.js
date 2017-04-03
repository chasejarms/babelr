import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class BabelrSignUp extends Component {
  render() {
    return(
      <View style={{margin: 30}}>
        <Text>This is the sign up page</Text>
        <Text onPress={Actions.login}>Go To Login Page</Text>
      </View>
    )
  }
}
