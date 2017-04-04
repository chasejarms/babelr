import React, { Component } from 'react'
import { View, Text, Modal } from 'react-native'

export default class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: this.state.showModal
    })
  }

  render () {
    return (
      <View>
        <Text>On the chat page</Text>
        <Text>View Group Settings</Text>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <Text>This will be the group setting screen</Text>
        </Modal>
      </View>
    )
  }
}
