import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, KeyboardAvoidingView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SessionActions from '../Redux/SessionRedux'
import AuthTextInput from '../Components/AuthTextInput'
import PillButton from '../Components/PillButton'
import Subscript from '../Components/Subscript'

import styles from './Styles/BabelrAuthentication'

class BabelrSignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
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

  handleSignup = () => {
    this.props.requestNewUser(this.state)
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.keyboardResizing} behavior='padding'>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../Images/babelr_logo.png')} />
        </View>
        <View style={[styles.authenticationPages, {flex: 3}]}>
          <AuthTextInput
            placeholder='email'
            onChangeText={this.update('email')}
            value={this.state.email}
            keyboardOpen='email-address'
            />
          <AuthTextInput
            placeholder='username'
            onChangeText={this.update('username')}
            value={this.state.username}
            />
          <AuthTextInput
            placeholder='password'
            onChangeText={this.update('password')}
            isPassword
            value={this.state.password}
            />
          <PillButton
            title='SIGN UP'
            onPress={this.handleSignup}
            />
          <Subscript
            innerText='Already a member? '
            callToActionText='Login'
            onTextPress={Actions.login}
            />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.token
})

const mapDispatchToProps = (dispatch) => ({
  requestNewUser: newUser => dispatch(SessionActions.signupRequest(newUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BabelrSignUp)
