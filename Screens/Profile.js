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

import {ViewStyle} from 'react-native';

import Bag from 'react-native-vector-icons/SimpleLineIcons';
import Coupon from 'react-native-vector-icons/MaterialCommunityIcons';
import Set from 'react-native-vector-icons/Feather';
import Verify from 'react-native-vector-icons/Octicons';
import Profilecard from './Profilecard';
function Profile() {
  return (
    <SafeAreaView style={{backgroundColor: '#E8E8E8', height: '100%'}}>
      
      <ScrollView>

        <Profilecard/>
        <View style={{backgroundColor: '#ffffff', marginBottom: 20}}>
          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 20,
                fontWeight: 'bold',
                fontSize: 20,
                padding: 10,
                marginBottom: -25,
              }}>
              Become a Guide
            </Text>
         
          <Text
            style={{
              width: '100%',
              marginBottom: 3,
              marginTop: 5,
              marginLeft: 20,
              padding: 10,
            }}>
            Earn Upto Rs 10000 per trip
          </Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#ffffff', marginBottom: 20}}>
          <Text style={[styles.hr, styles.heading]}>My Account</Text>
          <TouchableOpacity>
            <Text style={styles.hr}>
              <Bag name="bag" size={15} color="#666" />
              My Trips
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.hr}>
              <Coupon
                name="ticket-percent-outline"
                size={15}
                color="#666"
                style={{marginRight: 100}}
              />
              My Coupons
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.hr}>
              <Coupon
                name="comment-outline"
                size={15}
                color="#666"
                style={{marginRight: 10}}
              />
              My Reviews
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.hr}>
              <Coupon
                name="credit-card-outline"
                size={15}
                color="#666"
                style={{marginRight: 10}}
              />
              My Saved Trips
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.hr}>
              <Coupon
                name="account-question"
                size={15}
                color="#666"
                style={{marginRight: 10}}
              />
              Customer Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                width: '100%',
                marginBottom: 3,
                marginTop: 5,
                marginLeft: 20,
                padding: 10,
              }}>
              <Set
                name="settings"
                size={15}
                color="#666"
                style={{marginRight: 10}}
              />
              Account Settings
            </Text>
          </TouchableOpacity>
        </View>

        {/* </SafeAreaView>
    <SafeAreaView> */}
        <View style={{backgroundColor: '#ffffff', marginBottom: 20}}>
          <Text style={[styles.hr, styles.heading]}>Referrals</Text>

          <TouchableOpacity>
            <Text style={styles.hr}>
              <Coupon
                name="account-plus-outline"
                size={15}
                color="#666"
                style={{marginRight: 10}}
              />
              Refer & Earn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                width: '100%',
                marginBottom: 3,
                marginTop: 5,
                marginLeft: 20,
                padding: 10,
              }}>
              <Verify
                name="verified"
                size={15}
                color="#666"
                style={{marginRight: 10}}
              />
              Recommend & Earn
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#ffffff', marginBottom: 20}}>
          <TouchableOpacity>
            <Text
              style={{
                width: '100%',
                marginBottom: 3,
                marginTop: 5,
                marginLeft: 20,
                padding: 10,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 3,
    marginTop: 5,
    marginLeft: 20,
    padding: 10,
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Profile;
