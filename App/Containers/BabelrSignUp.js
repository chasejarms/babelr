import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class BabelrSignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  render () {
    return (
      <View style={{margin: 30}}>
        <Text>This is the sign up page</Text>
        <Text>Enter Username</Text>
        <TextInput
          style={{height: 40}}
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <Text>Enter Password</Text>
        <TextInput
          placeholder='password'
          style={{height: 40}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
        <Button
          title='Sign Up'
          onPress={Actions.authenticated}
          />
        <Text onPress={Actions.login}>Go To Login Page</Text>
      </View>
    )
  }
}

// duration on Scene
// Reducer from react-native-router-flux
// direction=vertical on Scene
// scheme=modal on Scene
// tabs=true on Scene
// icon={TabIcon} on Scene
// onRight / onLeft
// how do we manage dynamic group routes?
