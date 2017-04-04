import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class BabelrLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <View>
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
        <Text onPress={Actions.signUp}>Not yet a member? Sign up.</Text>
      </View>
    )
  }
}
