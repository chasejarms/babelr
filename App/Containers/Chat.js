import React, { Component } from 'react'
import { View, Modal, Keyboard, ScrollView } from 'react-native'
import PageHeader from '../Components/PageHeader'
import MessageSettings from './MessageSettings'
import NewMessageInput from '../Components/NewMessageInput'
import MessageItem from '../Components/MessageItem'
import { connect } from 'react-redux'
import styles from './Styles/Chat'
import MessageActions from '../Redux/MessageRedux'

class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.lang !== this.props.lang) {
      this.props.requestMessages(this.props.groupId, this.props.lang)
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  _keyboardDidShow = () => {
  }

  _keyboardDidHide = () => {
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
      <View style={styles.container}>
        <PageHeader
          iconName='more-horiz'
          headerText='MESSAGES'
          onIconPress={this.toggleModal} />
        <View style={styles.messagesContainer}>
          <ScrollView style={styles.scrollView}>
            { messages }
          </ScrollView>
          <NewMessageInput />
        </View>
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
  lang: session.user.preferredLanguage,
  groupId: currentGroup.groupId
})

const mapDispatchToProps = (dispatch) => ({
  requestMessages: (groupId, lang) => dispatch(MessageActions.requestMessages(groupId, lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
