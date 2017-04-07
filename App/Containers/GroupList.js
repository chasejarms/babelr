import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import GroupsHeader from '../Components/GroupsHeader'
import IndividualGroup from '../Components/IndividualGroup'
import { connect } from 'react-redux'
import GroupActions from '../Redux/GroupRedux'
// import { Actions } from 'react-native-router-flux'
import styles from './Styles/GroupList'

class GroupList extends Component {

  componentWillMount () {
    this.props.requestGroups(this.props.token)
  }

  render () {
    const { groupItems } = this.props.groups
    let allGroups
    if (groupItems) {
      allGroups = groupItems.map((groupInfo, idx) => {
        return <IndividualGroup groupInfo={groupInfo} key={idx} />
      })
    }
    return (
      <View style={styles.container}>
        <GroupsHeader />
        <ScrollView>
          { allGroups }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ groups, session }) => ({
  groups,
  token: session.token
})

const mapDispatchToProps = dispatch => ({
  requestGroups: token => dispatch(GroupActions.requestGroups(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
