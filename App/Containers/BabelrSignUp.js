import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AuthTextInput from '../Components/AuthTextInput'

export default class BabelrSignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  render () {
    return (
      <View>
        <AuthTextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          placeholder='email'
          />
        <AuthTextInput
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <Text>Password</Text>
        <AuthTextInput
          placeholder='password'
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
