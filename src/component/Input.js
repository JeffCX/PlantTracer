import React from "react"
import {View,Text,TouchableOpacity,StyleSheet, TextInput} from "react-native"

export  default (props) =>{
    return <TextInput 
            style={{color:"white",width:"80%",marginLeft:"10%",paddingLeft:30,paddingRight:30,padding:5,backgroundColor:"#29B87E",borderRadius:30,marginBottom:15,textAlign:"center"}}
            onChangeText={(text)=>{props.onChange(text)}}
            value={props.number}
            />
    
}

/**
 *return <TouchableOpacity onPress={props.onPress}>

            <View style={{width:"80%",marginLeft:"10%",paddingLeft:30,paddingRight:30,padding:5,backgroundColor:"#29B87E",borderRadius:30,marginBottom:15}}>
                <Text style={{textAlign:"center",color:"white"}}>{props.content}</Text>
            </View>
           </TouchableOpacity>
 */