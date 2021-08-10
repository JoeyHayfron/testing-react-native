import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const NavStack = createNativeStackNavigator();
const Nav = () => {
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="login">
        <NavStack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <NavStack.Screen name="home" component={HomeScreen} />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
