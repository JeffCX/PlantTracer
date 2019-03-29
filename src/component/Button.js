import React from "react"
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"

export  default (props) =>{

    return <TouchableOpacity onPress={props.onPress} >
            <View style={{width:"80%",marginLeft:"10%",paddingLeft:30,paddingRight:30,padding:5,backgroundColor:"#29B87E",borderRadius:30}}>
                <Text style={{textAlign:"center",color:"white"}}>{props.content}</Text>
            </View>
           </TouchableOpacity>
}