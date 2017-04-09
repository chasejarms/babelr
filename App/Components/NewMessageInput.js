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

const mapStateToProps = ({session: { user }}) => ({

})

const mapDispatchToProps = dispatch => ({
  requestNewMessageCreation: messageDetail => dispatch(MessageActions.requestNewMessageCreation(messageDetail))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageInput)
