import {Linking} from "react-native"

const LinkTo = (url) =>{
    Linking.openURL(url)
}

const NavigateTo = (navigation,page) =>{
    navigation.navigate(page)
}

export {LinkTo, NavigateTo}