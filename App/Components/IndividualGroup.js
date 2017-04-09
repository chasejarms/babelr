import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/IndividualGroup'
import { connect } from 'react-redux'
import MessageActions from '../Redux/MessageRedux'

class IndividualGroup extends Component {
  handlePress = (groupId) => () => {
    this.props.requestMessages(groupId, this.props.language)
    this.props.swipeTo(1)
  }

  render () {
    // use avatarUrl in here later
    const { title, subscribers, id } = this.props.groupInfo
    const formattedSubscribers = subscribers.map(subscriber => {
      return subscriber.username
    }).join(', ')
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress(id)}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
            />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={styles.chatName}
            ellipsizeMode='tail'
            numberOfLines={1}>
            { title }
          </Text>
          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            style={styles.chatMembers}>{ formattedSubscribers }</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = ({session: { user }}) => ({
  language: user.preferredLanguage
})

const mapDispatchToProps = dispatch => ({
  requestMessages: (groupId, language) => dispatch(MessageActions.requestMessages(groupId, language))
})

export default connect(mapStateToProps, mapDispatchToProps)(IndividualGroup)
