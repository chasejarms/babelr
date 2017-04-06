import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SessionActions from '../Redux/SessionRedux'
import AuthTextInput from '../Components/AuthTextInput'
import PillButton from '../Components/PillButton'
import Subscript from '../Components/Subscript'

import styles from './Styles/BabelrAuthentication'

class BabelrLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidUpdate () {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn = () => {
    if (this.props.loggedIn) Actions.authenticated()
  }

  update = field => text => {
    this.setState({ [field]: text })
  }

  handleLogin = () => {
    this.props.requestLogin(this.state)
  }

  render () {
    return (
      <View style={styles.authenticationPages}>
        <AuthTextInput
          placeholder='username'
          onChangeText={this.update('username')}
          value={this.state.username}
          />
        <AuthTextInput
          placeholder='password'
          onChangeText={this.update('password')}
          value={this.state.password}
          isPassword
          />
        <PillButton
          title='LOGIN'
          onPress={this.handleLogin}
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

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.token
})

const mapDispatchToProps = (dispatch) => ({
  requestLogin: userCredentials => dispatch(SessionActions.loginRequest(userCredentials))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BabelrLogin)
