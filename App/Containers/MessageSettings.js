import React, { Component } from 'react'
import { View } from 'react-native'
// import styles from './Styles/MessageSettings'
import PageHeader from '../Components/PageHeader'
import BabelrStatusBar from '../Components/BabelrStatusBar'
import Colors from '../Themes/Colors'

export default class MessageSetting extends Component {
  render () {
    return (
      <View>
        <BabelrStatusBar
          backgroundColor={Colors.darkGrey}
          barStyle='light-content'
          />
        <PageHeader
          iconName='close'
          headerText='MESSAGE SETTINGS'
          onIconPress={this.props.toggleModal} />
      </View>
    )
  }
}
