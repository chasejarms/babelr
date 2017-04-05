import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import styles from './Styles/BabelrStatusBar'

export default class ProgressBarBackground extends Component {
  render () {
    const { backgroundColor, ...props } = this.props
    return (
      <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
      </View>
    )
  }
}
