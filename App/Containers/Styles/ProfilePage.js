import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

const w = 0

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.darkerGrey,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  userWrapper: {
    flex: 1,
    alignSelf: 'stretch'
  },
  profile: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderWidth: w,
    borderColor: Colors.primaryRed,
    borderBottomWidth: 1
  },
  profileMain: {
    borderWidth: w,
    borderColor: Colors.primaryRed,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start'
  },
  avatar: {
    borderWidth: w,
    borderColor: Colors.primaryRed,
    width: 120,
    height: 120,
    marginRight: 20
  },
  nameWrapper: {
    borderWidth: w,
    borderColor: Colors.primaryRed,
    flex: 1
  },
  name: {
    color: Colors.lighterGrey,
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.type.bold
  },
  profileSub: {
    borderWidth: w,
    borderColor: Colors.primaryRed,
    flexDirection: 'row'
  },
  subTitleWrapper: {
    marginRight: 20
  },
  subInfo: {
    color: Colors.lighterGrey,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base,
    marginBottom: 5
  },
  settings: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    borderWidth: w,
    borderColor: Colors.primaryRed,
    flex: 1,
    alignItems: 'center'
  },
  settingTitle: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    color: Colors.lighterGrey,
    marginBottom: 5
  },
  pickerContainer: {
    borderWidth: w,
    borderColor: Colors.primaryRed,
    height: 100,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  picker: {
    height: 100
  },
  pickerItem: {
    color: Colors.lighterGrey,
    flex: 1,
    height: 30
  },
  actions: {
    borderWidth: w,
    borderColor: Colors.primaryRed,
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20
  },
  logoutButton: {
    flex: 1,
    backgroundColor: Colors.primaryRed,
    marginRight: 20
  },
  logoutText: {
    color: Colors.lighterGrey
  },
  saveButton: {
    flex: 1
  },
  saveText: {

  }
})
