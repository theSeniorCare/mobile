import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/SignupScreen/Signup";
import Login from "../screens/LoginScreen/Login";
import BeforeSignup from "../screens/SignupScreen/BeforeSignup";
import Chat from "../screens/ChatScreen/Chat";
import ChatRoom from "../screens/ChatRoomScreen/ChatRoom";

const Stack = createNativeStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="Chat"
    >
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
    </Stack.Navigator>
  );
}
