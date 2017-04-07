import React, { Component } from 'react'
import { Modal, View } from 'react-native'
import BabelrStatusBar from '../Components/BabelrStatusBar'
import PageHeader from '../Components/PageHeader'
import Colors from '../Themes/Colors'
import styles from './Styles/NewGroupModal'
import NewGroupForm from '../Components/NewGroupForm'

export default class NewGroupModal extends Component {
  render () {
    return (
      <Modal
        animationType='fade'
        transparent={false}
        visible={this.props.visible}>
        <View style={styles.pageView}>
          <BabelrStatusBar
            backgroundColor={Colors.darkGrey}
            barStyle='light-content'
            />
          <PageHeader
            iconName='close'
            headerText='NEW GROUP'
            onIconPress={this.props.closeModal} />
          <NewGroupForm />
        </View>
      </Modal>
    )
  }
}
