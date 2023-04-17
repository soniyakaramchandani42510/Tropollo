import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
TextInput  ,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
//   import {AlternateEmailIcon} from '@mui/icons-material/AlternateEmail';
const url = 'https://jsonplaceholder.typicode.com/posts';
import AppWraper from '../Screens/AppWraper';
import axios from 'axios';

function Login({navigation}) {
  const [phone, setPhone] = useState("1234567890");
  const [otp, setOtp] = useState("1111");
  const baseUrl='https://jsonplaceholder.typicode.com';

  const getApi=()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));
    axios.get(

      'https://jsonplaceholder.typicode.com/posts',
      // 'http://172.17.17.45:8000/api',
      { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8', }, }
     ).then(res=>console.log(res)).catch(err=>console.log(err.message));
  }
  // const submit = () => {
  //   let phoneNumberLength = phone.length;
  //   if (phoneNumberLength === 10 && otp === '1111') {
     
  //      navigation.navigate('AppWraper');
  //   }
  //   else{
  //     return Alert.alert('Incorrect Phone no or otp');
  //   }
    
  // };

  
  // console.log(phone);
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <Image
          style={{alignSelf: 'center', marginTop: 30, marginBottom: 20}}
          source={require('../assets/Logo.jpeg')}
        />
        <Image
          style={{alignSelf: 'center', marginBottom: 20}}
          source={require('../assets/Tropolo.jpeg')}
        />
        {/* <Icon1
          name="amazon"
          size={200}
          color="#666"
          style={{marginRight: 5, textAlign: 'center'}}
        /> */}
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <Icon name="phone" size={20} color="#666" style={{marginRight: 5}} />
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={e => setPhone(e)}
            style={{flex: 1, paddingVertical: 0}}
            keyboardType="number-pad"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <Icon name="lock" size={20} color="#666" style={{marginRight: 5}} />
          <TextInput
            placeholder="Otp"
            value={otp}
            onChangeText={e => setOtp(e)}
            style={{flex: 1, paddingVertical: 0}}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#2C3454',
            padding: 20,
            borderRadius: 10,
            marginBottom: 10,
          }}
          onPress={() => {getApi()}}
         
          >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
            }}>
            Login
          </Text>
        </TouchableOpacity>

       

        <TouchableOpacity
          style={{padding: 20, borderRadius: 10, marginBottom: 10}}
          onPress={() => {}}>
          <Text
            style={{
              color: '#111',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 10}}>
          Sign in with
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              padding: 20,
              borderRadius: 10,
              borderColor: '#FF0000',
              marginBottom: 30,
            }}
            onPress={() => {}}>
            <Text
              style={{
                color: '#111',
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 16,
              }}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 20, borderRadius: 10, marginBottom: 30}}
            onPress={() => {}}>
            <Text
              style={{
                color: '#111',
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 16,
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
