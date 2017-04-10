import React, { Component } from 'react'
import {
  View,
  Modal,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView } from 'react-native'
import PageHeader from '../Components/PageHeader'
import MessageSettings from './MessageSettings'
import NewMessageInput from '../Components/NewMessageInput'
import MessageItem from '../Components/MessageItem'
import { connect } from 'react-redux'
import styles from './Styles/Chat'

class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      visibleHeight: {
        // height: Dimensions.get('window').height - 20
      }
    }
  }

  componentWillReceiveProps (newProps) {
    this.scrollView.scrollToEnd({animated: true})
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  _keyboardDidShow = (e) => {
    // let newSize = Dimensions.get('window').height - e.endCoordinates.height - 20
    // this.setState({
    //   visibleHeight: {
    //     height: newSize
    //   }
    // })
  }

  _keyboardDidHide = () => {
    // let newSize = Dimensions.get('window').height - 20
    // this.setState({
    //   visibleHeight: {
    //     height: newSize
    //   }
    // })
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render () {
    const messages = this.props.messages.map((message, idx) => {
      return <MessageItem key={idx} message={message} lang={this.props.lang} />
    })
    return (
      <View style={[styles.container]}>
        <KeyboardAvoidingView style={styles.keyboardResizing} behavior='padding'>
          <PageHeader
            iconName='more-horiz'
            headerText='MESSAGES'
            onIconPress={this.toggleModal} />
          <View style={styles.messagesContainer}>
            <ScrollView
              ref={(component) => { this.scrollView = component }}
              style={styles.scrollView}>
              { messages }
            </ScrollView>
          </View>
          <NewMessageInput />
        </KeyboardAvoidingView>
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

const mapStateToProps = ({ currentGroup, session }) => ({
  messages: currentGroup.messages,
  lang: session.user ? session.user.preferredLanguage : 'en'
})

export default connect(mapStateToProps)(Chat)
