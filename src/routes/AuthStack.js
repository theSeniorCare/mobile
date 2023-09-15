import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/SignupScreen/Signup';
import Login from '../screens/LoginScreen/Login';
import BeforeSignup from '../screens/SignupScreen/BeforeSignup';
import Landing from '../screens/LandingScreen/Landing';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Landing'>
      <Stack.Screen name='Landing' component={Landing} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='BeforeSignup' component={BeforeSignup} />
    </Stack.Navigator>
  );
}

