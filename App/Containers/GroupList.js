import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import GroupsHeader from '../Components/GroupsHeader'
import IndividualGroup from '../Components/IndividualGroup'
import { Actions } from 'react-native-router-flux'
import styles from './Styles/GroupList'

let dummyData = [
  {
    avatarUrl: 'https://facebook.github.io/react/img/logo_og.png',
    name: 'React',
    groupMembers: ['Chase', 'Leo', 'Jesse']
  },
  {
    avatarUrl: 'https://facebook.github.io/react/img/logo_og.png',
    name: 'Rails',
    groupMembers: ['Alec', 'Bao', 'Claire']
  },
  {
    avatarUrl: 'https://facebook.github.io/react/img/logo_og.png',
    name: 'Redux',
    groupMembers: ['John', 'Jim', 'Tom']
  }
]

export default class GroupList extends Component {
  render () {
    const allGroups = dummyData.map(groupInfo => {
      return <IndividualGroup groupInfo={groupInfo} />
    })
    return (
      <View style={styles.container}>
        <GroupsHeader />
        <ScrollView>
          { allGroups }
        </ScrollView>
      </View>
    )
  }
}
