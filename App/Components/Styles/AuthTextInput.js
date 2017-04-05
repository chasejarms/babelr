import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  textInputStyle: {
    height: Metrics.inputHeight,
    color: Colors.lightGrey,
    fontFamily: Fonts.base,
    paddingLeft: 15,
    fontSize: Fonts.input
  },
  viewStyle: {
    alignSelf: 'stretch',
    backgroundColor: Colors.darkGrey,
    marginBottom: Metrics.containerPadding,
    borderRadius: Metrics.inputRadius
  }
})
