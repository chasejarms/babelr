import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  authenticationPages: {
    padding: Metrics.containerPadding,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
    backgroundColor: Colors.darkerGrey
  },
  keyboardResizing: {
    flex: 1
  },
  logo: {
    height: '40%',
    resizeMode: 'contain'
  },
  imageContainer: {
    backgroundColor: Colors.darkerGrey,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})
