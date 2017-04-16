import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  messageItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 7
  },
  messageContent: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  author: {
    color: Colors.darkerGrey,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    marginBottom: 5
  },
  messageText: {
    color: Colors.darkerGrey,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base
  }
})
