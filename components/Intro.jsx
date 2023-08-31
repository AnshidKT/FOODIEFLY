import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Intro = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../imgs/burger.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.introbody}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '50%',
              // backgroundColor: 'grey',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '80%',
                // backgroundColor: 'red',
                justifyContent: 'space-evenly',
              }}>
              <Image
                style={{width: 40, height: 60}}
                source={require('../imgs/swiggy.png')}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                Swiggy
              </Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray',

                  flexDirection: 'row',
                  width: '85%',
                  height: 60,
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 20, color: 'white'}}>Food</Text>
                <Text
                  style={{
                    fontSize: 35,
                    marginTop: -20,
                    fontWeight: 800,
                    color: 'orange',
                  }}>
                  .
                </Text>
                <Text style={{fontSize: 20, color: 'white', opacity: 0.5}}>
                  Instamart
                </Text>
                <Text
                  style={{
                    fontSize: 35,
                    marginTop: -20,
                    fontWeight: 800,
                    color: 'orange',
                  }}>
                  .
                </Text>
                <Text style={{fontSize: 20, color: 'white', opacity: 0.5}}>
                  Dineout
                </Text>
              </View>
              <Text style={{fontSize: 20, marginRight: 82}}>
                Order from top restaurants
              </Text>

              <TouchableOpacity
                style={{
                  opacity: 10,
                  alignItems: 'center',
                  backgroundColor: '#f55505',
                  width: 340,
                  height: 48,
                  borderRadius: 8,
                }}
                onPress={()=>navigation.navigate('Validation')}
                >
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    marginTop: 9,
                    fontWeight: 600,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  introbody: {
    width: '100%',
    height: '100%',
    color: 'white',
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default Intro;
