import React from "react"
import {View,Text,TouchableOpacity, Image} from "react-native"
import BackgroundGradient from '../../component/BackgroundGradient';
import UploadVideoSection from "../../component/UploadVideoSection"
import {NavigateTo} from "../../api/NavigateTo"
import {GenerateNavigationButton} from "../../api/GenereateHeader"
import Button from "../../component/Button"

const FromGallery = {
    title:"Select from \n Video Gallery",
}

const FromSample = {
    title:"Select from  \n Sample Videoo",
}

class HomeScreen extends React.Component {

  state = {
    tracing:false
  }

  tracing = () =>{
    this.setState({
      tracing:!this.state.tracing
    })

    setTimeout(()=>{
      this.setState({
        tracing:!this.state.tracing
      })
    },1500)
  }

  static navigationOptions = ({navigation}) =>{
    return GenerateNavigationButton("Step Five: Tracing",navigation)
}

    render() {
      const {navigation} = this.props
      return (
        <BackgroundGradient>
            <Image source={require("../../asset/placeHolderImage.jpg")} style={{width:"100%",height:"40%",marginBottom:15}}/>
            <Button 
              content={this.state.tracing?"Tracing...":"Trace"} 
              onPress={this.tracing} 
              />
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen