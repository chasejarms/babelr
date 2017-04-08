import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 2
  },
  noUserText: {
    color: Colors.lighterGrey
  },
  individualUser: {
    backgroundColor: Colors.primaryRed,
    borderRadius: Metrics.inputRadius,
    flexDirection: 'row'
  },
  username: {
    color: Colors.darkerGrey,
    flex: 1,
    fontSize: Fonts.size.input
  },
  closeIcon: {
    color: Colors.darkerGrey,
    fontSize: Fonts.size.input
  }
})
