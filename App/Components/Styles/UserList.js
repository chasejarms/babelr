import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingBottom: Metrics.containerPadding,
    alignSelf: 'stretch'
  },
  listView: {
    flex: 3,
    marginBottom: Metrics.containerPadding,
    alignSelf: 'stretch',
    backgroundColor: Colors.darkGrey,
    borderRadius: Metrics.inputRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: Colors.lightGrey,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.input
  }
})
