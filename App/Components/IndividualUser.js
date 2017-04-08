import React, { Component } from 'react'
import { Text } from 'react-native'

export default class IndividualUser extends Component {

  render () {
    const { user } = this.props
    return (
      <Text>{user.username}</Text>
    )
  }
}
