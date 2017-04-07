import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.darkerGrey,
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: Colors.lighterGrey
  }
})
