import React from "react"
import {View,Text,TouchableOpacity,Button,Image} from "react-native"
import BackgroundGradient from '../../component/BackgroundGradient';
import UploadVideoSection from "../../component/UploadVideoSection"
import {NavigateTo} from "../../api/NavigateTo"
import {GenerateNavigationButton} from "../../api/GenereateHeader"
import ImagePicker from 'react-native-image-picker';

const FromGallery = {
    title:"Select from \n Video Gallery",
}

const FromSample = {
    title:"Select from  \n Sample Videoo",
}

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) =>{
    return GenerateNavigationButton("Step One: Upload Video",navigation)
  }

  state = {
    avatarSource:""
  }

  _pickVideo = () =>{
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  }


    render() {
      const {navigation} = this.props
      return (
        <BackgroundGradient>
            <Button title="gan" onPress={this._pickVideo} />
            <Image source={this.state.avatarSource} style={{width:300,height:300}} />
            <UploadVideoSection {...FromGallery} onPress={()=>{NavigateTo(navigation,"StepTwoTrimVideo")}} />
            <UploadVideoSection {...FromSample} onPress={()=>{NavigateTo(navigation,"StepTwoTrimVideo")}}/>
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen