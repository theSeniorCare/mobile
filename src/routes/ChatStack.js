import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/ChatScreen/Chat";
import ChatRoom from "../screens/ChatRoomScreen/ChatRoom";
import { Colors } from "../constants";

const Stack = createNativeStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: Colors.green_accent,
        headerStyle: {
          backgroundColor: Colors.main_color,
        },
      }}
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
