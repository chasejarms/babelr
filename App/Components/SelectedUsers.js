import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/SelectedUsers'

export default class SelectedUsers extends Component {
  render () {
    const formattedUsers = this.props.selectedUsers.map(user => {
      return (
        <View key={user.id} style={styles.individualUser}>
          <Text style={styles.username}>{user.username}</Text>
          <Icon name='close' style={styles.closeIcon} />
        </View>
      )
    })

    if (formattedUsers[0]) {
      return (
        <View style={styles.container}>
          { formattedUsers }
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.no}>No selected users...yet</Text>
      </View>
    )
  }
}
