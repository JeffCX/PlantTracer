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
    return GenerateNavigationButton("Step Two: Trim Video",navigation)
}


    render() {
      return (
        <BackgroundGradient>
            <UploadVideoSection {...FromGallery} />
            <UploadVideoSection {...FromSample} />
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen