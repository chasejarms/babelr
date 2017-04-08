import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    height: 50,
    borderColor: Colors.lightGrey,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center'
  },
  text: {
    color: Colors.lighterGrey,
    paddingLeft: Metrics.inputPaddingLeft,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.input
  }
})
