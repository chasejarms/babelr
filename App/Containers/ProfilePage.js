import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import SessionActions from '../Redux/SessionRedux'
import PillButton from '../Components/PillButton'
import styles from './Styles/ProfilePage'

class ProfilePage extends Component {

  handleLogout = () => {
    this.props.logout()
    NavigationActions.login()
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: 'https://s3-us-west-1.amazonaws.com/babelr/cb8.jpg'}} />
          <Text style={styles.text}>"username"</Text>
          <Text style={styles.text}>language dropdown</Text>
        </View>
        <PillButton
          title='Logout'
          onPress={this.handleLogout} />
      </View>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  user: session.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)
