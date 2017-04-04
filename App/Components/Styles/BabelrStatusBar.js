import { StyleSheet, Platform } from 'react-native'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0

export default StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
})
