import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  messageItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: Metrics.containerPadding
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 7
  },
  messageContent: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  author: {
    marginTop: 4,
    color: Colors.darkerGrey,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    marginBottom: 5
  },
  messageText: {
    color: Colors.darkerGrey,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base
  }
})
