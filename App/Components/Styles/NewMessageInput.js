import { StyleSheet } from 'react-native'
import Metrics from '../../Themes/Metrics'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.lightestGrey,
    borderTopWidth: 1
  },
  textInput: {
    height: 50,
    paddingBottom: Metrics.containerPadding,
    paddingLeft: Metrics.containerPadding,
    backgroundColor: Colors.lightestGrey
  }
})
