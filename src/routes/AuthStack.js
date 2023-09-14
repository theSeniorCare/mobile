import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/SignupScreen/Signup';
import Login from '../screens/LoginScreen/Login';
import BeforeSignup from '../screens/SignupScreen/BeforeSignup';
import { DeveloperOptionStack } from './DeveloperOptionStack';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='BeforeSignup' component={BeforeSignup} />
      <Stack.Screen name='DeveloperOption' component={DeveloperOptionStack} />
    </Stack.Navigator>
  );
}

