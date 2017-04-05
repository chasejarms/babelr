import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AuthTextInput from '../Components/AuthTextInput'
import PillButton from '../Components/PillButton'
import Subscript from '../Components/Subscript'

import styles from './Styles/BabelrAuthentication'

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
      <View style={styles.authenticationPages}>
        <AuthTextInput
          placeholder='email'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          keyboardOpen='email-address'
          />
        <AuthTextInput
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <AuthTextInput
          placeholder='password'
          onChangeText={(password) => this.setState({password})}
          isPassword
          value={this.state.password}
          />
        <PillButton
          title='SIGN UP'
          onPress={Actions.authenticated}
          />
        <Subscript
          innerText='Already a member? '
          callToActionText='Login'
          onTextPress={Actions.login}
          />
      </View>
    )
  }
}
