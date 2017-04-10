import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/MessageItem'

export default class MessageItem extends Component {
  render () {
    const { author } = this.props.message
    const text = this.props.message[`${this.props.lang}_text`]
    return (
      <View style={styles.messageItem}>
        <Text>{ author }</Text>
        <Text>{ text }</Text>
      </View>
    )
  }
}
