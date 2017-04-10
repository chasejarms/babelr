import { StyleSheet } from 'react-native'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center'
  },
  textInput: {
    height: 50,
    paddingBottom: Metrics.containerPadding,
    paddingLeft: Metrics.containerPadding
  }
})
