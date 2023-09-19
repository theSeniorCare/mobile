import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Colors } from "../constants";
import AboutScreen from "../screens/AboutScreen";
import Menu from "../screens/MenuScreen/Menu";

const Stack = createNativeStackNavigator();

export function MenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.main_color,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: Colors.main_green,
        },
        headerTintColor: Colors.main_green,
      }}
      initialRouteName="menu"
    >
      <Stack.Screen
        name="menu"
        component={Menu}
        options={{
          headerTitle: "Menu",
        }}
      />
      <Stack.Screen
        name="about"
        component={AboutScreen}
        options={{
          headerTitle: "About Us",
        }}
      />
    </Stack.Navigator>
  );
}
