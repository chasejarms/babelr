import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/RootContainerStyles'

export default class LandingPage extends Component {
  render () {
    return (
      <View style={styles.landingPage}>
        <Text>This is the default landing page here</Text>
      </View>
    )
  }
}
