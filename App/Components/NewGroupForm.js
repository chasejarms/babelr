import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles/NewGroupForm'
import AuthTextInput from './AuthTextInput'
import PillButton from './PillButton'
import UserList from './UserList'

export default class NewGroupForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groupName: '',
      userSearch: '',
      selectedUsers: []
    }
  }

  addUserToGroup = user => {
    // TODO: check for users that are already in the array
    // and don't show them on the search list
    let newSelectedUsers = this.state.selectedUser.slice()
    newSelectedUsers.push(user)
    this.setState({
      selectedUser: newSelectedUsers
    })
  }

  update = field => text => {
    this.setState({ [field]: text })
  }

  requestGroupCreation = () => {
    // this function is merely a placeholder for now
    console.log('nothing')
  }

  render () {
    return (
      <View style={styles.formContainer}>
        <AuthTextInput
          placeholder='your group name here'
          onChangeText={this.update('groupName')}
          value={this.state.groupName}
          />
        <AuthTextInput
          placeholder='search users by username'
          onChangeText={this.update('userSearch')}
          value={this.state.userSearch}
          />
        <UserList
          addUserToGroup={this.addUserToGroup}
          userSearch={this.state.userSearch} />
        <PillButton
          title='CREATE GROUP'
          onPress={this.requestGroupCreation}
          />
      </View>
    )
  }
}
