import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles/NewGroupForm'
import AuthTextInput from './AuthTextInput'
import PillButton from './PillButton'
import UserList from './UserList'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'

class NewGroupForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groupName: '',
      userQuery: '',
      selectedUsers: []
    }
  }

  addUserToGroup = user => () => {
    if (this.state.selectedUsers.length < 7) {
      this.setState({
        selectedUsers: this.state.selectedUsers.concat([user])
      })
    }
  }

  update = field => text => {
    this.setState({ [field]: text })
  }

  updateUserQuery = userQuery => {
    this.setState({
      userQuery
    })
    this.props.requestUsers(userQuery)
  }

  requestGroupCreation = () => {
    console.tron.log(this.state.selectedUsers)
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
          onChangeText={this.updateUserQuery}
          value={this.state.userQuery}
          />
        <UserList
          addUserToGroup={this.addUserToGroup}
          selectedUsers={this.state.selectedUsers}
          />
        <PillButton
          title='CREATE GROUP'
          onPress={this.requestGroupCreation}
          />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  requestUsers: userQuery => dispatch(UserActions.requestUsers(userQuery))
})

export default connect(undefined, mapDispatchToProps)(NewGroupForm)
