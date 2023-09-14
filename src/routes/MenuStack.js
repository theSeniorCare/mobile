import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/SignupScreen/Signup';
import Login from '../screens/LoginScreen/Login';
import BeforeSignup from '../screens/SignupScreen/BeforeSignup';
import Menu from '../screens/MenuScreen/Menu';
import DeveloperOption from '../screens/DeveloperOptionScreen/DeveloperOption';

const Stack = createNativeStackNavigator();

export function MenuStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='menu'>
            <Stack.Screen name='menu' component={Menu} />
        </Stack.Navigator>
    );
}

