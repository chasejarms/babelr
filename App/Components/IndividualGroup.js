import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class IndividualGroup extends Component {
  render () {
    const { name, groupMembers } = this.props.groupInfo
    return (
      <View>
        <Text>{ name }</Text>
        <Text>{ groupMembers.join(',') }</Text>
      </View>
    )
  }
}
