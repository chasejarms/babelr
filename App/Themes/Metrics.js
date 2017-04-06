import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  containerPadding: 20,
  inputHeight: 50,
  inputRadius: 3,
  pillWidth: 200,
  screenWidth: width,
  screenHeight: height,
  headerHeight: 60,
  groupAvatar: 60,
  plusPositionTop: 15,
  plusPositionRight: 15
}

export default metrics
