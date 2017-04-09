import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/MessageItem'

export default class MessageItem extends Component {
  render () {
    const { author, text } = this.props.message
    return (
      <View style={styles.messageItem}>
        <Text>{ author }</Text>
        <Text>{ text }</Text>
      </View>
    )
  }
}
