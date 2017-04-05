import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  touchableOpacityStyle: {
    borderColor: Colors.primaryRed,
    height: Metrics.inputHeight,
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.containerPadding,
    width: 200
  },
  textStyle: {
    color: Colors.primaryRed,
    fontSize: Fonts.input
  }
})
