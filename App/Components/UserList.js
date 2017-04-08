import React, { Component } from 'react'
import { ListView, View, Text } from 'react-native'
import styles from './Styles/UserList'
import { connect } from 'react-redux'
// import IndividualUser from './IndividualUser'

class UserList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  render () {
    const { users } = this.props.userSearch
    if (users[0]) {
      const dataSource = this.state.ds.cloneWithRows(users)
      return (
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Text>{rowData.username}</Text>}
          />
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
