import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

const textInputstyle = {
  height: 40,
  color: 'white',
  paddingLeft: 20
}

const viewStyle = {
  borderBottomWidth: 1,
  borderColor: 'white',
  borderStyle: 'solid',
  width: 200,
  paddingTop: 20
}

export default class AuthTextInput extends Component {
  render () {
    const { placeholder, onChangeText, value } = this.props
    return (
      <View style={viewStyle}>
        <TextInput
          style={textInputstyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize='none'
          autoCorrect={false}
          placeholderTextColor='white'
          />
      </View>
    )
  }
}
