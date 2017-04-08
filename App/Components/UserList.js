import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/UserList'
import { connect } from 'react-redux'

class UserList extends Component {
  render () {
    const { users } = this.props.userSearch
    if (users[0]) {
      const allUsers = users.map(user => <Text style={styles.textStyle}>{user.username}</Text>)
      return (
        <View style={styles.containerStyle}>
          { allUsers }
        </View>
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
