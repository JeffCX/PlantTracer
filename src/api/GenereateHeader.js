
import React from "react"
import {View,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'

const NavigationButton = (props) =>{
    return <View style={{paddingLeft:10}}>
                <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
                    <Icon name="back" style={{color:"black"}} size={30} />
                </TouchableOpacity>
            </View>
}

const GenerateNavigationButton = (title,navigation) =>{
    return  {
        title: `${title}`,
        headerStyle: {
            backgroundColor: "white"
        },
        headerTitleStyle: {
            color:"black"
        },
        headerLeft: <NavigationButton navigation={navigation} />
    }
}

const GenerateHeader = (name) =>{
    return {
        title: `${name}`,
        headerStyle: {
          backgroundColor: '#15191D'
        },
        headerTitleStyle: {
            color:"white",
        },
        headerLeft:()=>{
            return <View></View>
        }
    }
}

export { GenerateNavigationButton, GenerateHeader  }
