import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, Picker } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import SessionActions from '../Redux/SessionRedux'
import PillButton from '../Components/PillButton'
import styles from './Styles/ProfilePage'

class ProfilePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      preferredLanguage: props.user.preferredLanguage
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !!nextProps.user
  }

  handleLogout = () => {
    this.props.logout()
    NavigationActions.login()
  }

  handleSave = () => {
    this.props.updateUser(this.state)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.userWrapper}>
          <View style={styles.profile}>
            <View style={styles.profileMain}>
              <Image style={styles.avatar}
                resizeMode={'cover'}
                source={{uri: this.props.user.avatarUrl || 'https://s3-us-west-1.amazonaws.com/babelr/cb8.jpg'}} />
              <View style={styles.nameWrapper}>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.name}>
                  {this.props.user.firstName}
                </Text>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.name}>
                  {this.props.user.lastName}
                </Text>
              </View>
            </View>
            <View style={styles.profileSub}>
              <View style={styles.subTitleWrapper}>
                <Text style={styles.subInfo}>username:</Text>
                <Text style={styles.subInfo}>email:</Text>
              </View>
              <View style={styles.subInfoWrapper}>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.subInfo}>
                  {this.props.user.username}
                </Text>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.subInfo}>
                  {this.props.user.email}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.settings}>
            <Text style={styles.settingTitle}>Preferred Language</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                itemStyle={styles.pickerItem}
                selectedValue={this.state.preferredLanguage}
                onValueChange={(preferredLanguage) => this.setState({preferredLanguage})}>
                <Picker.Item label='English' value='en' />
                <Picker.Item label='Spanish' value='es' />
                <Picker.Item label='Russian' value='ru' />
                <Picker.Item label='Japanese' value='ja' />
                <Picker.Item label='German' value='de' />
                <Picker.Item label='Arabic' value='ar' />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <PillButton
            buttonStyles={styles.logoutButton}
            textStyles={styles.logoutText}
            title='Logout'
            onPress={this.handleLogout} />
          <PillButton
            buttonStyles={styles.saveButton}
            textStyles={styles.saveText}
            title='Save'
            onPress={this.handleSave} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  user: session.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  updateUser: (user) => dispatch(SessionActions.updateUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)
