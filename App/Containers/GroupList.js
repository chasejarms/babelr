import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import PageHeader from '../Components/PageHeader'
import IndividualGroup from '../Components/IndividualGroup'
import { connect } from 'react-redux'
import GroupActions from '../Redux/GroupRedux'
// import { Actions } from 'react-native-router-flux'
import styles from './Styles/GroupList'
import NewGroupModal from './NewGroupModal'

class GroupList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  componentWillMount () {
    this.props.requestGroups()
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render () {
    const { groupItems } = this.props.groups
    let allGroups
    if (groupItems) {
      allGroups = groupItems.map((groupInfo, idx) => {
        return <IndividualGroup swipeTo={this.props.swipeTo} groupInfo={groupInfo} key={idx} />
      })
    }
    return (
      <View style={styles.container}>
        <PageHeader
          iconName='add'
          headerText='GROUPS'
          onIconPress={this.toggleModal} />
        <ScrollView>
          { allGroups }
        </ScrollView>
        <NewGroupModal
          visible={this.state.modalOpen}
          closeModal={this.toggleModal}
          />
      </View>
    )
  }
}

const mapStateToProps = ({ groups, session }) => ({
  groups,
  token: session.token
})

const mapDispatchToProps = dispatch => ({
  requestGroups: () => dispatch(GroupActions.requestGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
