import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IndividualGroup'

export default class IndividualGroup extends Component {
  render () {
    // use avatarUrl in here later
    const { title, subscribers } = this.props.groupInfo
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
            />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.chatName}>{ title }</Text>
          <Text style={styles.chatMembers}>{ subscribers.join(', ') }</Text>
        </View>
      </View>
    )
  }
}
