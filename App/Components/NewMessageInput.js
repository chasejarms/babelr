import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import Colors from '../Themes/Colors'
import styles from './Styles/NewMessageInput'
import { connect } from 'react-redux'
import MessageActions from '../Redux/MessageRedux'

class NewMessageInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messageText: ''
    }
  }

  handleMessageUpdate = (messageText) => {
    this.setState({ messageText })
  }

  onSubmitEditing = () => {
    const { chat_id, language } = this.props
    const messageDetail = {
      chat_id,
      text: this.state.messageText,
      language
    }

    this.props.requestMessageCreation(messageDetail)
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder='your message here'
          onChangeText={this.handleMessageUpdate}
          value={this.state.messageText}
          autoCapitalize='none'
          autoCorrect={false}
          placeholderTextColor={Colors.lightGrey}
          selectionColor={Colors.primaryRed}
          keyboardType='default'
          onSubmitEditing={this.onSubmitEditing}
          />
      </View>
    )
  }
}

  // chat_id, language

const mapStateToProps = ({session, currentGroup}) => ({
  chat_id: currentGroup.groupId,
  language: session.user ? session.user.preferredLanguage : 'en'
})

const mapDispatchToProps = dispatch => ({
  requestMessageCreation: messageDetail => dispatch(MessageActions.requestMessageCreation(messageDetail))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageInput)
