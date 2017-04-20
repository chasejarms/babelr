import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  messagesContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    backgroundColor: Colors.lightestGrey
  },
  noMessages: {
    backgroundColor: Colors.lightestGrey,
    flex: 1,
    padding: Metrics.containerPadding
  },
  keyboardResizing: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    height: '40%',
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noMessageText: {
    fontSize: Fonts.size.h3,
    textAlign: 'center'
  }
})
