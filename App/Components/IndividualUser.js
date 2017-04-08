import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class IndividualUser extends Component {

  render () {
    return (
      <TouchableOpacity onPress={this.props.addUserToGroup}>
        <Text>{this.props.user.username}</Text>
      </TouchableOpacity>
    )
  }
}
