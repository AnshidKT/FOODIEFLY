import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './components/Intro';
import Validation from './components/Validation';
import Home from './components/home/Home';
import {CartProvider} from './components/shopcontext/ShopContext';
import Cart from './components/cart/Cart';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Validation" component={Validation} />
          <Stack.Screen name="Landing" component={Home} />
          <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
