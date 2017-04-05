import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  containerPadding: 20,
  inputHeight: 50,
  inputRadius: 3,
  pillWidth: 200,
  screenWidth: width,
  screenHeight: height
}

export default metrics
