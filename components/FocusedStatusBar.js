import { StatusBar,Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';


const FocusedStatusBar = (data) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...data}/> : null;
}

export default FocusedStatusBar