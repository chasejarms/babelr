import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  groupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  container: {
    height: Metrics.headerHeight,
    backgroundColor: Colors.darkerGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.primaryRed,
    borderStyle: 'solid'
  },
  plusSignContainer: {
    position: 'absolute',
    right: Metrics.plusPositionTop,
    top: Metrics.plusPositionRight
  },
  plusSign: {
    fontSize: Fonts.size.plusIcon,
    color: Colors.primaryRed
  },
  text: {
    color: Colors.primaryRed,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h4
  }
})
