import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

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
        <Text>Email</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(email) => this.setState({email})}
          placeholder='john@example.com'
          />
        <Text>Username</Text>
        <TextInput
          style={{height: 40}}
          placeholder='johnny43'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <Text>Password</Text>
        <TextInput
          placeholder='surfingTheUSA144'
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
