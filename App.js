// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';

import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Details from './screens/Details';

  const stack = createStackNavigator();
  
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };


    const App = () => {

      const [loaded] = useFonts({
        InterBold : require("./assets/fonts/Inter-Bold.ttf"),
        InterLight : require("./assets/fonts/Inter-Light.ttf"),
        InterMedium : require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular : require("./assets/fonts/Inter-Regular.ttf"),
        InterSemiBold : require("./assets/fonts/Inter-SemiBold.ttf"),

      });

      if(!loaded) return null;

      return (
      <NavigationContainer theme={theme}>
        <stack.Navigator screenOptions={{ headerShown:false}} initialRouteName="Home">
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='Details' component={Details}/>
        </stack.Navigator>
      </NavigationContainer>
      );
    }

export default App;
