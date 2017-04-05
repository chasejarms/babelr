import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AuthTextInput from '../Components/AuthTextInput'
import PillButton from '../Components/PillButton'
import Subscript from '../Components/Subscript'

import styles from './Styles/BabelrAuthentication'

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
      <View style={styles.authenticationPages}>
        <AuthTextInput
          placeholder='username'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <AuthTextInput
          placeholder='password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          isPassword
          />
        <PillButton
          title='LOGIN'
          onPress={Actions.authenticated}
          />
        <Subscript
          innerText='Not yet a member? '
          callToActionText='Sign Up'
          onTextPress={Actions.signUp}
          />
      </View>
    )
  }
}
