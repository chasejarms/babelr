import React, { Component } from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import Chat from './Chat'
import GroupList from './GroupList'
import ProfilePage from './ProfilePage'

import styles from './Styles/ChatPages'

export default class ChatPages extends Component {
  render () {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={styles.container}>
          <GroupList />
        </View>
        <View>
          <Chat />
        </View>
        <View>
          <ProfilePage />
        </View>
      </Swiper>
    )
  }
}
