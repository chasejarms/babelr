import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/GroupsHeader'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class IndividualGroup extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.groupWrapper}>
          <Text style={styles.text}>Group</Text>
        </View>
        <Icon name='add' style={styles.plusSign} />
      </View>
    )
  }
}
