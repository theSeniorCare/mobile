import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
const BeforeSignup = ({ navigation }) => {
  const handleBoxPress = (userType) => {
    // Handle the box press here
    navigation.navigate('Signup',{userType});
  };

  const handleBackButtonPress = () => {
    // Handle the back button press here
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Log In</Text>
        <TouchableOpacity onPress={() => handleBoxPress('Care Giver')}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Care Giver</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleBoxPress('Senior')}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Senior</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default BeforeSignup;
