import React from "react"
import {View,Text,TouchableOpacity, Image} from "react-native"
import BackgroundGradient from '../../component/BackgroundGradient';
import {NavigateTo} from "../../api/NavigateTo"
import {GenerateNavigationButton} from "../../api/GenereateHeader"
import Button from "../../component/Button"

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) =>{
    return GenerateNavigationButton("Step Two: Trim Video",navigation)
}

    render() {
      const {navigation} = this.props
      return (
        <BackgroundGradient>
            <Image source={require("../../asset/placeHolderImage.jpg")} style={{width:"100%",height:"40%",marginBottom:15}}/>
            <Button content="Next" onPress={()=>{NavigateTo(navigation,"StepThreeSelectCaptureInterval")}}/>
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen