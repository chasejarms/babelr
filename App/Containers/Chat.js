import React, { Component } from 'react'
import {
  View,
  ScrollView,
  KeyboardAvoidingView } from 'react-native'
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
      showModal: false,
      visibleHeight: {
        // height: Dimensions.get('window').height - 20
      }
    }
  }

  componentDidReceiveProps () {
    this.scrollView.scrollToEnd({animated: true})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.lang !== this.props.lang && this.props.groupId && nextProps.groupId) {
      this.props.requestCurrentGroup(this.props.groupId, nextProps.lang)
    }
    this.scrollView.scrollToEnd({animated: true})
  }

  componentDidMount () {
    if (this.props.groupId) {
      this.props.requestCurrentGroup(this.props.groupId, this.props.lang)
      this.scrollView.scrollToEnd({animated: true})
    }
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
              ref={(component) => { this.scrollView = component }}
              style={styles.scrollView}>
              { messages }
            </ScrollView>
          </View>
          <NewMessageInput />
        </KeyboardAvoidingView>
        <MessageSettings
          visible={this.state.showModal}
          toggleModal={this.toggleModal}
        />
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
