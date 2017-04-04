import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Colors from '../Themes/Colors'
import AuthTextInput from '../Components/AuthTextInput'

const style = {
  padding: 30,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  backgroundColor: Colors.primaryOne,
  paddingBottom: 100
}

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
      <View style={style}>
        <AuthTextInput
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <AuthTextInput
          placeholder='password'
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
