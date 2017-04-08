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
      lang: 'en'
    }
  }

  handleLogout = () => {
    this.props.logout()
    NavigationActions.login()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.userWrapper}>
          <View style={styles.profile}>
            <View style={styles.profileMain}>
              <Image style={styles.avatar}
                resizeMode={'cover'}
                source={{uri: 'https://s3-us-west-1.amazonaws.com/babelr/cb8.jpg'}} />
              <View style={styles.nameWrapper}>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.name}>
                  Leo
                </Text>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.name}>
                  Salat
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
                  the_big_l
                </Text>
                <Text
                  adjustsFontSizeToFit={false}
                  style={styles.subInfo}>
                  {'leo.salat@gmail.com'}
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
                selectedValue={this.state.lang}
                onValueChange={(lang) => this.setState({lang})}>
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
            title='Save'
            onPress={this.handleSave} />
          <PillButton
            title='Logout'
            onPress={this.handleLogout} />
        </View>
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
