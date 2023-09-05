import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FirstBody from './FirstBody';

const Home = ({ navigation }) => {
  return (
    <View>
      <FirstBody navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
