import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/IndividualUser'

export default class IndividualUser extends Component {

  render () {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onUserPress}>
        <Text style={styles.text}>{this.props.user.username}</Text>
      </TouchableOpacity>
    )
  }
}
