import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IndividualGroup'

export default class IndividualGroup extends Component {
  render () {
    const { name, groupMembers, avatarUrl } = this.props.groupInfo
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: avatarUrl }}
            />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.chatName}>{ name }</Text>
          <Text style={styles.chatMembers}>{ groupMembers.join(', ') }</Text>
        </View>
      </View>
    )
  }
}
