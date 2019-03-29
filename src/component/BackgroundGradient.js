import React from "react"
import LinearGradient  from 'react-native-linear-gradient';
import {StyleSheet,Button} from "react-native"
import {mainColor, secondaryColor} from "../static"


class BackgroundGradient extends React.Component{


    render(){
        return <LinearGradient colors={[mainColor,secondaryColor]} style={Styles.container}>             
                    {this.props.children}
            </LinearGradient>
    }
}
   

export default BackgroundGradient

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        justifyContent: 'center',
        padding:30
    }
})