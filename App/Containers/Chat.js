import React, { Component } from 'react'
import {
  View,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard} from 'react-native'
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

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  _keyboardDidShow = () => {
    this.scrollToBottomOfChat()
  }

  _keyboardDidHide = () => {
    this.scrollToBottomOfChat()
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
    clearInterval(this.interval)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.lang !== this.props.lang && this.props.groupId && nextProps.groupId) {
      this.props.requestCurrentGroup(this.props.groupId, nextProps.lang)
    }
  }

  componentDidMount () {
    if (this.props.groupId) {
      this.props.requestCurrentGroup(this.props.groupId, this.props.lang)
    }
    this.interval = setInterval(() => {
      this.props.requestCurrentGroup(this.props.groupId, this.props.lang)
    }, 1000)
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  scrollToBottomOfChat = (contentHeight) => {
    this.scrollView.scrollToEnd({animated: true})
  }

  render () {
    const messages = this.props.messages.map((message, idx) => {
      return <MessageItem key={idx} message={message} lang={this.props.lang} />
    })
    return (
      <View style={[styles.container]}>
        <KeyboardAvoidingView
          style={styles.keyboardResizing}
          behavior='padding'
        >
          <PageHeader
            iconName='more-horiz'
            headerText={this.props.groupTitle}
            onIconPress={this.toggleModal} />
          <View style={styles.messagesContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              ref={(component) => {
                this.scrollView = component
              }}
              style={styles.scrollView}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.scrollToBottomOfChat(contentHeight)
              }}>
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
  lang: session.user ? session.user.preferredLanguage : 'en',
  groupId: currentGroup.id,
  groupTitle: currentGroup.title
})

const mapDispatchToProps = (dispatch) => ({
  requestCurrentGroup: (groupId, lang) => dispatch(MessageActions.requestCurrentGroup(groupId, lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
