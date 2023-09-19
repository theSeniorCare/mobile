<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDatabase, ref, onValue } from "firebase/database";
import Home from "../screens/HomeScreen/Home";
import Chat from "../screens/ChatScreen/Chat";
import Profile from "../screens/ProfileScreen/Profile";
import Menu from "../screens/MenuScreen/Menu";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { MenuStack } from "./MenuStack";
import { ChatStack } from "./ChatStack";
=======
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../constants";
import Home from "../screens/HomeScreen/Home";
import { ChatStack } from "./ChatStack";
import Profile from "../screens/ProfileScreen/Profile";
import { MenuStack } from "./MenuStack";
import Appointments from "../screens/AppointmentsScreen/Appointments";
>>>>>>> main

const Tab = createBottomTabNavigator();

export function AppStack({ userType }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
<<<<<<< HEAD
        tabBarActiveTintColor: "#e91e63",
=======
        headerStyle: {
          backgroundColor: Colors.main_color,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: Colors.main_green,
        },
        tabBarStyle: {
          backgroundColor: Colors.main_color,
        },
        tabBarActiveTintColor: Colors.red_accent,
>>>>>>> main
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => <Home userType={userType} />}
        options={{
          tabBarLabel: "Home",
<<<<<<< HEAD
=======
          headerShown: false,
>>>>>>> main
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
<<<<<<< HEAD
        name="Chat"
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
=======
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: "Appointments",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-check"
>>>>>>> main
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
<<<<<<< HEAD
          tabBarLabel: "Profile",
=======
          headerShown: false,
          tabBarLabel: "Chat",
>>>>>>> main
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#281034",
  },
});
