import React from "react"
import {View,Text,TouchableOpacity} from "react-native"
import BackgroundGradient from '../../component/BackgroundGradient';
import UploadVideoSection from "../../component/UploadVideoSection"
import {NavigateTo} from "../../api/NavigateTo"
import {GenerateNavigationButton} from "../../api/GenereateHeader"

const FromGallery = {
    title:"Select from \n Video Gallery",
}

const FromSample = {
    title:"Select from  \n Sample Videoo",
}

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) =>{
    return GenerateNavigationButton("Step One: Upload Video",navigation)
}


    render() {
      const {navigation} = this.props
      return (
        <BackgroundGradient>
            <UploadVideoSection {...FromGallery} onPress={()=>{NavigateTo(navigation,"StepTwoTrimVideo")}} />
            <UploadVideoSection {...FromSample} onPress={()=>{NavigateTo(navigation,"StepTwoTrimVideo")}}/>
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen