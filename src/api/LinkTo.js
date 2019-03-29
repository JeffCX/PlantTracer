import {Linking} from "react-native"

const LinkTo = (url) =>{
    Linking.openURL(url)
}

export {LinkTo}