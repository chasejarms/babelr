import React, { Component } from 'react'
import { ListView, View, Text } from 'react-native'
import styles from './Styles/UserList'
import { connect } from 'react-redux'
import IndividualUser from './IndividualUser'

class UserList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      addedUsers: []
    }
  }

  userNotYetAdded = (user) => {
    let notAdded = true
    this.state.addedUsers.forEach(addedUser => {
      if (addedUser.id === user.id) {
        notAdded = false
      }
    })
    return notAdded
  }

  addUserToGroup = user => () => {
    this.setState({
      addedUsers: this.state.addedUsers.push(user)
    })
  }

  render () {
    const { users } = this.props.userSearch
    const userMinusAdded = users.filter(user => this.userNotYetAdded(user))
    if (userMinusAdded[0]) {
      const dataSource = this.state.ds.cloneWithRows(userMinusAdded)
      return (
        <ListView
          dataSource={dataSource}
          renderRow={(user) => {
            return <IndividualUser onUserPress={this.addUserToGroup(user)} user={user} />
          }} />
      )
    } else {
      return (
        <View style={styles.containerStyle}>
          <Text style={{color: 'blue'}}>No Users match search</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = ({userSearch}) => ({
  userSearch
})

export default connect(mapStateToProps)(UserList)
