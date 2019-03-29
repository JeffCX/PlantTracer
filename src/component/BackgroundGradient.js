import React from "react"
import { LinearGradient } from 'react-native-linear-gradient';
import {StyleSheet} from "react-native"
import {mainColor, secondaryColor} from "../static"

const BackgroundGradient = (props) =>{
    return <LinearGradient color={[mainColor,secondaryColor]} style={Styles.container}>             
                {props.children}
           </LinearGradient>
}

export default BackgroundGradient

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        justifyContent: 'center'
    }
})