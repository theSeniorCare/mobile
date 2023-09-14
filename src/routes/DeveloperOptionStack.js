import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/SignupScreen/Signup';
import Login from '../screens/LoginScreen/Login';
import BeforeSignup from '../screens/SignupScreen/BeforeSignup';
import DeveloperOption from '../screens/DeveloperOptionScreen/DeveloperOption';
import { AppStack } from './AppStack';

const Stack = createNativeStackNavigator();

// ONLY FOR DEVELOPMENT
export function DeveloperOptionStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DeveloperOption'>
            <Stack.Screen name='DeveloperOption' component={DeveloperOption} />
            <Stack.Screen name='AppStack' component={AppStack} />
        </Stack.Navigator>
    );
}

