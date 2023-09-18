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
  ScrollView
} from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import styles from './styles';
import { ref, set } from "firebase/database";
import { DateTimePicker } from '@react-native-community/datetimepicker';

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};



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

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleDatepicker= ()=>{
    setShow(!show)
  }
  const onChange= ({type},selectedDate) =>{
    if(type == "set"){
      const currentDate = selectedDate
      setDate(currentDate)
    }else{
      toggleDatepicker()
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <ScrollView
        showsVerticalScrollIndicator={false} >
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
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
       <TextInput
          style={styles.input}
          placeholder="Gender"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
       <TextInput
          style={styles.input}
          placeholder="Gender"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
       <TextInput
          style={styles.input}
          placeholder="DOB"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
       <TextInput
          style={styles.input}
          placeholder="Description"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
       <TextInput
          style={styles.input}
          placeholder="Specialization"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
       <TextInput
          style={styles.input}
          placeholder="Price"
          value={password}
          onChangeText={(text) => setPassword(text)}
       />
        <TextInput
          style={styles.input}
          placeholder="Availability"
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


        </ScrollView>
      
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}


export default Signup;
