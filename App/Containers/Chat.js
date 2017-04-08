import React, { Component } from 'react'
import { View, Modal } from 'react-native'
import PageHeader from '../Components/PageHeader'
import MessageSettings from './MessageSettings'

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
        <PageHeader
          iconName='more-horiz'
          headerText='MESSAGES'
          onIconPress={this.toggleModal} />
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}
          animationType='fade'>
          <MessageSettings toggleModal={this.toggleModal} />
        </Modal>
      </View>
    )
  }
}
