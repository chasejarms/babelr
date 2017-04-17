import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: Colors.darkerGrey,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  topStuff: {
    alignSelf: 'stretch'
  },
  leaveButton: {
    backgroundColor: Colors.primaryRed,
    marginRight: 20
  },
  leaveText: {
    color: Colors.darkGrey
  },
  settings: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    height: 500
  }
})
