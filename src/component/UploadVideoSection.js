import React from "react"
import {StyleSheet,View,Text, TouchableOpacity} from "react-native"
import {largeSize, smallSize} from "../static"
import Icon from "react-native-vector-icons/AntDesign"

const HomeSection = (props) =>{
    return <View style={Styles.container}>
                <TouchableOpacity onPress={props.onPress}>
                <Icon name="videocamera" size={40} color="white" style={{textAlign:"center"}}/>
                    <Text style={Styles.title}>
                        {props.title}
                    </Text>
                </TouchableOpacity>
           </View>
}

export default HomeSection 

const Styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:20,
        justifyContent:"center",
        shadowOffset:{  width: 5,  height: 2 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        alignItems:"center"
    },
    title:{
        textAlign:"center",
        color:"white",
        fontSize:largeSize,
        fontWeight:"bold",
        marginBottom:smallSize
    },
})