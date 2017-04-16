import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/MessageItem'

export default class MessageItem extends Component {
  render () {
    const { author } = this.props.message
    const text = this.props.message[`${this.props.lang}_text`]
    return (
      <View style={styles.messageItem}>
        <Image
          style={styles.avatar}
          source={{uri: author.avatar_url || 'https://s3-us-west-1.amazonaws.com/babelr/cb8.jpg'}}
        />
        <View style={styles.messageContent}>
          <Text style={styles.author}>{ author.username }</Text>
          <Text style={styles.messageText}>{ text }</Text>
        </View>
      </View>
    )
  }
}
