// import React from 'react'
import React, {useEffect, useState} from 'react';
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
function About({navigation}) {
  const submit = () => {
   
     
       navigation.navigate('AppWraper');
   
    
  };
  return (
    
    <SafeAreaView>
      <ScrollView>
      <Text style={{fontWeight:'bold',fontSize:20,marginLeft: 12,color:'#2C3454'}}>Tell us about yourself </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
       
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="numeric"
      />


      <Text style={{fontWeight:'400',fontSize:20,marginLeft: 12,color:'#2C3454'}}>Which city do you want to host your
experience in?</Text>
<TextInput
        style={styles.input}
        placeholder="City"
        
      />

      <Text style={{fontWeight:'400',fontSize:20,marginLeft: 12,color:'#2C3454'}}>Which language will you offer your
experience in?</Text>

<TextInput
        style={styles.input}
        placeholder="Language"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Language"
        
      />
      
      <Text style={{fontWeight:'400',fontSize:20,marginLeft: 12,color:'#2C3454'}}>Explain your experience in brief...</Text>
      <TextInput
    multiline={true}
    numberOfLines={10}
    
    style={{ height:100, textAlignVertical: 'top',borderWidth: 1,margin: 12,padding: 10,borderRadius:10}}/>

<TouchableOpacity
          style={{
           position:'relative',
            // marginHorizontal: 120,
            // marginBottom:20,
            backgroundColor: '#2C3454',
            width: '100%',
            height:50,
            // borderRadius:10
           
            
          }}
          onPress={() => submit()}
          >
          <Text
            style={{
              color: '#fff',
              
              justifyContent:'center',
              textAlign: 'center',
              alignItems:'center',
              fontWeight: '700',
              fontSize: 25,
              
             
            }}>
           Submit
          </Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
    
  },
});
export default About