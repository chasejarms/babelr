import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  textInputStyle: {
    height: Metrics.inputHeight,
    color: Colors.lightGrey,
    fontFamily: Fonts.type.base,
    paddingLeft: 15,
    fontSize: Fonts.size.regular
  },
  viewStyle: {
    alignSelf: 'stretch',
    backgroundColor: Colors.darkGrey,
    marginBottom: Metrics.containerPadding,
    borderRadius: Metrics.inputRadius
  }
})
