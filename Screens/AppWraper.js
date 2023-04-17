import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Contact from '../Screens/Contact';
import Search from '../Screens/Search';
import Favourites from '../Screens/Favourites';
// import AppWraper from '../Screens/AppWraper';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationBar from '../Component/NavigationBar';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
function AppWraper({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon3
                name="home"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon1
                name="contacts"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon1
                name="search1"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="favorite-border"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Icon1
                name="profile"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppWraper;
