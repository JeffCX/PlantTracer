import React from "react"
import {StyleSheet,View,Text, TouchableOpacity} from "react-native"
import {largeSize, smallSize} from "../static"

const HomeSection = (props) =>{
    return <View style={Styles.container}>
                <TouchableOpacity onPress={props.onPress}>
                    
                    <Text style={Styles.title}>
                        {props.title}
                    </Text>

                    <Text style={Styles.content}>
                        {props.content}
                    </Text>
                    
                    <Text style={Styles.underline}>
                        ------ 
                    </Text>
                </TouchableOpacity>
           </View>
}

export default HomeSection 

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        shadowOffset:{  width: 5,  height: 2 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        alignItems:"center"
    },
    underline:{
        textAlign:"center",
        color:"white",
        fontSize:smallSize,
        fontWeight:"bold",
        marginBottom:smallSize
    },
    title:{
        textAlign:"center",
        color:"white",
        fontSize:largeSize,
        fontWeight:"bold",
        marginBottom:smallSize
    },
    content:{
        textAlign:"center",
        color:"white",
        fontSize:smallSize,
        marginBottom:smallSize
    },
    
})