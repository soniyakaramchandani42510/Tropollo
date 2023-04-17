import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#2C3454'}}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            
            <Image
           style={styles.profileAvatar}
          source={require('../assets/Logo.jpeg')}
        />

            <View style={styles.profileBody}>
              <Text style={styles.profileName}>Troppolo</Text>
              <Text style={styles.profileHandle}>+00000000</Text>

              <Text style={styles.profileHandle}>troppolo@gmail.com</Text>
            </View>
          </View>
          <Text style={styles.profileAbout}>About me</Text>
          <Text style={{ marginBottom:10,}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quasi.</Text>


          <Text style={styles.profileAbout}>Location</Text>
          <Text>London,Uk</Text>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    // width:90
    marginHorizontal:20,
    borderBottomColor:'#000000',
    borderColor:'#000000',
    
    
    
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius:15
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d3d3d',
  },
  profileAbout: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3d3d3d',
    
   
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#989898',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C3454',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});