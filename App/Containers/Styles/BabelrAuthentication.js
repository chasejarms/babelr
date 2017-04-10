import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  authenticationPages: {
    padding: Metrics.containerPadding,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.darkerGrey
  },
  keyboardResizing: {
    flex: 1
  }
})
