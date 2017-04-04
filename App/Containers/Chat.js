import React, { Component } from 'react'
import { View, Text, Modal } from 'react-native'
import BabelrStatusBar from '../Components/BabelrStatusBar'
import Colors from '../Themes/Colors'

export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render () {
    return (
      <View>
        <Text>On the chat page</Text>
        <Text onPress={this.toggleModal}>View Group Settings</Text>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}
          animationType='slide'>
          <BabelrStatusBar
            backgroundColor={Colors.primaryTwo}
            barStyle='light-content'
            />
          <Text>This will be the group setting screen</Text>
          <Text onPress={this.toggleModal}>Click here to exit the modal</Text>
        </Modal>
      </View>
    )
  }
}
