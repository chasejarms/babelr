import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './Styles/Subscript'

export default class Subscript extends Component {
  render () {
    const { onTextPress, innerText, callToActionText } = this.props
    return (
      <View>
        <Text
          style={styles.normalText}>
          { innerText }
          <Text
            onPress={onTextPress}
            style={styles.spanText}
            >
            { callToActionText }
          </Text>
        </Text>
      </View>
    )
  }
}
