import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/PillButton'

export default class PillButton extends Component {
  render () {
    const { title, onPress } = this.props
    return (
      <TouchableOpacity
        style={[styles.touchableOpacityStyle, this.props.buttonStyles]}
        onPress={onPress}
        >
        <Text style={[styles.textStyle, this.props.textStyles]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}
