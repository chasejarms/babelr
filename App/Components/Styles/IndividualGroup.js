import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.containerPadding,
    alignItems: 'center',
    borderColor: Colors.darkGrey,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  imageContainer: {
    paddingRight: Metrics.containerPadding
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1
  },
  avatar: {
    width: Metrics.groupAvatar,
    height: Metrics.groupAvatar,
    borderRadius: Metrics.inputRadius
  },
  chatName: {
    color: Colors.lighterGrey,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h4,
    paddingBottom: 8
  },
  chatMembers: {
    color: Colors.lightGrey,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular
  }
})
