import React from "react"
import BackgroundGradient from '../../component/BackgroundGradient';
import HomeSection from "../../component/HomeSection"
import {LinkTo, NavigateTo} from "../../api/NavigateTo"
import  {Circumnutation,Gravitropism,LinkToPlant,Tutorial} from "./content"

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