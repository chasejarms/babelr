import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styles from './Styles/AuthTextInput'
import Colors from '../Themes/Colors'

export default class AuthTextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPlaceholder: true
    }
  }

  render () {
    const { placeholder, onChangeText, value, isPassword, keyboardOpen } = this.props
    const keyboardType = keyboardOpen || 'default'
    const secureTextEntry = !!isPassword
    const shownPlaceholder = this.state.showPlaceholder ? placeholder : ''
    return (
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={shownPlaceholder}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize='none'
          autoCorrect={false}
          placeholderTextColor={Colors.lightGrey}
          selectionColor={Colors.primaryRed}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => this.setState({showPlaceholder: false})}
          onBlur={() => this.setState({showPlaceholder: true })}
          />
      </View>
    )
  }
}
