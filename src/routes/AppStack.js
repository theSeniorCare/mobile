import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../constants";
import Appointments from "../screens/AppointmentsScreen/Appointments";
import Home from "../screens/HomeScreen/Home";
import { ChatStack } from "./ChatStack";
import { MenuStack } from "./MenuStack";

const Tab = createBottomTabNavigator();

export function AppStack({ userType }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
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
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => <Home userType={userType} />}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: "Appointments",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-check"
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
          headerShown: false,
          tabBarLabel: "Chat",
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
          headerShown: false,
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
