import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const Validation = ({navigation}) => {


  
  return (
  
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent:'space-between'
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 70,
          // backgroundColor: 'gray',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
          <Image
            style={{marginLeft: 20, width: 35, height: 20}}
            source={require('../imgs/backarrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 20,
            backgroundColor: 'black',
            width: 80,
            height: 40,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              marginTop: 6,
              color: 'white',
              fontWeight: '500',
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          height: '42%',
          // backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: 26, fontWeight: 800, color: 'black'}}>
          Enter your mobile number{' '}
        </Text>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 10,
            width: 350,
            height: 60,
            borderColor: 'red',
            borderWidth: 1,
            // backgroundColor:'red'
          }}>
          <View
            style={{
              width: 50,
              height: 30,
              // borderRightColor: 'gray',
              borderRightWidth: 1,
            }}>
            <Text style={{textAlign: 'center', fontSize: 16, color: 'black'}}>
              +91
            </Text>
          </View>

          <TextInput
            style={{fontSize: 16, marginLeft: 10,color:'black'}}
            placeholder="10 digit mobile number"
            placeholderTextColor="gray"
          />
        </View>

        <TouchableOpacity
    onPress={()=>navigation.navigate('Landing')}
          style={{
            width: 340,
            borderRadius: 8,
            alignItems: 'center',
            height: 55,
            backgroundColor: 'gray',

          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginTop: 14,
              fontWeight: 600,
            }}>
            Get OTP
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'black', width: 340, fontSize: 11, opacity: 0.5}}>
          By clicking,I accepting the terms of service and privacy policy
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          height: '40%',
          // backgroundColor:'red',
        
        }}>
        <Image
          style={{width: 80, height: 130}}
          source={require('../imgs/swiggy.png')}
        />
        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
          Swiggy
        </Text>
      </View>
    </View>
 
  );
};

export default Validation;

const styles = StyleSheet.create({});

