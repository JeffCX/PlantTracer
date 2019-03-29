import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/pages/Home/Home"
import StepOneUploadVideo from "./src/pages/StepOneUploadVideo/StepOneUploadVideo"
import StepTwoTrimVideo from "./src/pages/StepTwoTrimVideo/StepTwoTrimVideo"
import StepThreeSelectCaptureInterval from "./src/pages/StepThreeSelectCaptureInterval/StepThreeSelectCaptureInterval"
import StepFourSelectScale from "./src/pages/StepFourSelectScale/StepFourSelectScale"
import StepFiveTracing from "./src/pages/StepFiveTracing/StepFiveTracing"

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    StepOneUploadVideo,
    StepTwoTrimVideo,
    StepThreeSelectCaptureInterval,
    StepFourSelectScale,
    StepFiveTracing
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default createAppContainer(AppNavigator);