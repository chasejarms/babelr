import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  normalText: {
    color: Colors.lighterGrey,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base
  },
  spanText: {
    color: Colors.primaryRed,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base
  }
})
