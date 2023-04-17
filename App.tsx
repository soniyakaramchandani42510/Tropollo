

import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Component/Login';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './Screens/About';
import AppWraper from './Screens/AppWraper';



function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
 useEffect(() => {
  const timer =setTimeout(()=>{
    SplashScreen.hide();
  },10);
  return ()=>clearTimeout(timer);
   
 
   
 }, [])



  return (
    
    // <View>
      
    //  <Login/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
        <Stack.Screen name="AppWraper" component={AppWraper} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
