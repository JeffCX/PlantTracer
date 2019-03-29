import React from "react"
import {View,Text,TouchableOpacity} from "react-native"
import BackgroundGradient from '../../component/BackgroundGradient';
import HomeSection from "../../component/HomeSection"
import {LinkTo, NavigateTo} from "../../api/NavigateTo"

const Circumnutation = {
    title:"Circumnutation",
    content:"Upload a video of a ciumnutating  \n plant to track and measure \n rate& average amplitude"
}

const Gravitropism = {
    title:"Gravitropism",
    content:"Upload a video of plant \n tropism to measure the \n  rate. distance & angle"
}

const LinkToPlant = {
    title:"Links to the \n Plant World",
    content:"A-Z about plants"
}

const Tutorial = {
    title:"Using Plant Tracer",
    content:"How to Use this application"
}

const url = "http://www.planttracer.com/"

class HomeScreen extends React.Component {
    
    static navigationOptions = {
        header:null
    };

    render() {
      const {navigation} = this.props
      return (
        <BackgroundGradient>
            <HomeSection {...Circumnutation} onPress={()=>{NavigateTo(navigation,"StepOneUploadVideo")}} />
            <HomeSection {...Gravitropism} onPress={()=>{NavigateTo(navigation,"StepOneUploadVideo")}} />
            <HomeSection {...LinkToPlant} onPress={()=>{LinkTo(url)}}/>
            <HomeSection {...Tutorial} onPress={()=>{LinkTo(url)}}/>
        </BackgroundGradient>
      );
    }
  }


  export default HomeScreen