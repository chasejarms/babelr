import React, { Component } from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import Chat from './Chat'
import GroupList from './GroupList'
import ProfilePage from './ProfilePage'

import styles from './Styles/ChatPages'

export default class ChatPages extends Component {
  swipeTo = idx => this.swiper.scrollBy(idx)

  render () {
    return (
      <Swiper
        ref={(component) => { this.swiper = component }}
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={styles.container}>
          <GroupList swipeTo={this.swipeTo} />
        </View>
        <View>
          <Chat />
        </View>
        <View style={styles.container}>
          <ProfilePage />
        </View>
      </Swiper>
    )
  }
}
