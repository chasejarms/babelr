import React, { Component } from 'react'
import { ListView, View, Text } from 'react-native'
import styles from './Styles/UserList'
import { connect } from 'react-redux'
import IndividualUser from './IndividualUser'
import SelectedUsers from './SelectedUsers'

class UserList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  userNotYetSelected = (user) => {
    let notSelected = true
    this.props.selectedUsers.forEach(selectedUser => {
      if (selectedUser.id === user.id) {
        notSelected = false
      }
    })
    return notSelected
  }

  render () {
    const { users } = this.props.userSearch
    const userMinusSelected = users.filter(user => this.userNotYetSelected(user))
    if (userMinusSelected[0]) {
      const dataSource = this.state.ds.cloneWithRows(userMinusSelected)
      return (
        <View style={styles.containerStyle}>
          <View style={styles.listView}>
            <ListView
              style={{alignSelf: 'stretch'}}
              dataSource={dataSource}
              renderRow={(user) => {
                return <IndividualUser onUserPress={this.props.addUserToGroup(user)} user={user} />
              }} />
          </View>
          <SelectedUsers
            selectedUsers={this.props.selectedUsers}
            />
        </View>
      )
    } else {
      return (
        <View style={styles.containerStyle}>
          <View style={styles.listView}>
            <Text style={styles.textStyle}>No Users match search...</Text>
          </View>
          <SelectedUsers
            selectedUsers={this.props.selectedUsers}
            />
        </View>
      )
    }
  }
}

const mapStateToProps = ({userSearch}) => ({
  userSearch
})

export default connect(mapStateToProps)(UserList)
