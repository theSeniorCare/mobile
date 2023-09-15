import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import styles from './styles';
import { ref, set } from "firebase/database";



const Signup = ({ navigation,route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const database = FIREBASE_DB;
  const { userType } = route.params;

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            email: user.email,
            userType: userType 
          };
          const userRef = ref(database, 'users/' + user.uid);
          set(userRef, userData)
            .then(() => {
              // Registration successful
              // You can add any additional logic here
            })
            .catch((error) => {
              // Handle error while saving data to Firebase
              Alert.alert('Firebase Error:', error.message);
            });
  
        })
        .catch((error) => Alert.alert('Signup Error', error.message));
    } else {
      alert('Missing Fields', 'Please enter both email and password.'+ userType);
    }
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
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Sign Up</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
          <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: '#839D8E', fontWeight: '600', fontSize: 14 }}> Log In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}


export default Signup;
