import React from "react"
import {View,Text,TouchableOpacity, Image} from "react-native"
import BackgroundGradient from '../../component/BackgroundGradient';
import UploadVideoSection from "../../component/UploadVideoSection"
import {NavigateTo} from "../../api/NavigateTo"
import {GenerateNavigationButton} from "../../api/GenereateHeader"
import Button from "../../component/Button"
import Input from "../../component/Input"

const FromGallery = {
    title:"Select from \n Video Gallery",
}

const FromSample = {
    title:"Select from  \n Sample Videoo",
}

class HomeScreen extends React.Component {

  state = {
    number:""
  }

  handleChange = (text) =>{
    this.setState({
      number:text
    })
  }

  renderButton = () =>{
    const {navigation} = this.props
    if(this.state.number){
      return              <Button  content="Next" onPress={()=>{NavigateTo(navigation,"StepFourSelectScale")}}/>

    }
  }

  static navigationOptions = ({navigation}) =>{
    return GenerateNavigationButton("Step Three: Enter Frame",navigation)
  }

    render() {

      return (
        <BackgroundGradient>
            <Image source={require("../../asset/placeHolderImage.jpg")} style={{width:"100%",height:"40%",marginBottom:15}}/>
            
            <Input content="Enter frame number:" onChange={this.handleChange} value={this.state.number}/>
            {this.renderButton()}

            
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen