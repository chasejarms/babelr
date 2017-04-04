import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  // new styling
  landingPage: {
    backgroundColor: Colors.greenMain,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // native styling
  applicationView: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
