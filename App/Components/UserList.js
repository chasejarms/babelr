import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/UserList'

export default class UserList extends Component {
  render () {
    return (
      <View style={styles.containerStyle}>
        <Text>This is the user list</Text>
      </View>
    )
  }
}
