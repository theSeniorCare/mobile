import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Landing from "../screens/LandingScreen/Landing";
import Login from "../screens/LoginScreen/Login";
import BeforeSignup from "../screens/SignupScreen/BeforeSignup";
import Signup from "../screens/SignupScreen/Signup";
import Splash from "../screens/SplashScreen/Splash";
import Appointments from "../screens/AppointmentsScreen/Appointments";
import AppointmentDetail from "../screens/AppointmentDetailScreen/AppointmentDetail";
import Profile from "../screens/ProfileScreen/Profile";
import AboutUs from "../screens/AboutUsScreen/AboutUs";
import PrivacyPolicy from "../screens/PrivacyPolicyScreen/PrivacyPolicy";

import { DeveloperOptionStack } from "./DeveloperOptionStack";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="BeforeSignup" component={BeforeSignup} />
      <Stack.Screen name="DeveloperOption" component={DeveloperOptionStack} />
    </Stack.Navigator>
  );
}
