import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './NewGroupForm'
// import AuthTextInput from './AuthTextInput'

export default class NewGroupForm extends Component {
  render () {
    return (
      <View style={styles.formContainer}>
        <Text>This is the new group form</Text>
      </View>
    )
  }
}
