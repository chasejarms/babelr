import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PageHeader'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class PageHeader extends Component {
  render () {
    const { headerText, iconName, onIconPress } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.groupWrapper}>
          <Text style={styles.text}>{headerText}</Text>
        </View>
        <TouchableOpacity
          onPress={onIconPress}
          style={styles.plusSignContainer}>

          <Icon name={iconName} style={styles.plusSign} />

        </TouchableOpacity>
      </View>
    )
  }
}
