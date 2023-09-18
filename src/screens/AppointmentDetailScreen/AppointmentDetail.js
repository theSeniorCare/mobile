import {
  View,
  Text,
  Image,
  Animated,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {
  useFonts,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default AppointmentDetail = ({ userType , route}) => {
  console.log(route.params)  ;  
  const appointmentModel = route.params;

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{appointmentModel.name}</Text>
    </SafeAreaView>
  );
};
