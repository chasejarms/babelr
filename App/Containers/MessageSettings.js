import React, { Component } from 'react'
import { Modal, View } from 'react-native'
import styles from './Styles/MessageSettings'
import PageHeader from '../Components/PageHeader'
import BabelrStatusBar from '../Components/BabelrStatusBar'
import PillButton from '../Components/PillButton'
import Colors from '../Themes/Colors'

export default class MessageSettings extends Component {
  render () {
    return (
      <Modal
        animationType='fade'
        transparent={false}
        visible={this.props.visible}>
        <View style={styles.pageView}>
          <View style={styles.topStuff}>
            <BabelrStatusBar
              backgroundColor={Colors.darkGrey}
              barStyle='light-content'
              />
            <PageHeader
              iconName='close'
              headerText='GROUP SETTINGS'
              onIconPress={this.props.toggleModal}
              />
          </View>
          <PillButton
            buttonStyles={styles.leaveButton}
            textStyles={styles.leaveText}
            title='Leave Group'
            onPress={() => console.tron.log('group left!')}
          />
        </View>
      </Modal>
    )
  }
}
