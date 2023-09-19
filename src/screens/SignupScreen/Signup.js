import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
} from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import styles from './styles';
import { ref, set } from "firebase/database";
import GenderPicker from './GenderPicker';
import DatePicker from './DatePicker';



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
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [availabilityDate, setavailabilityDate] = useState(new Date());
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [name, setName] = useState('');


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}
        showsVerticalScrollIndicator={false} >
        <Text style={styles.title}>Sign Up for {userType}</Text>

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.text}>Password</Text>
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


        <Text style={styles.textTitle}>Personal Informaiton</Text>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.text}>Gender</Text>
        <GenderPicker />

        <DatePicker
          label="Date Of Birth"
          selectedDate={dateOfBirth}
          onDateChange={setDateOfBirth}
        />

        <Text style={styles.text}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]} 
          placeholder="Description"
          numberOfLines={4}
          maxLength={40}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <Text style={styles.text}>Specialization</Text>
        <TextInput
            style={[styles.input,{ height: 100, textAlignVertical: 'top' }]}
            placeholder="Specialization"
            value={specialization}
            onChangeText={(text) => setSpecialization(text)}
        />

        <Text style={styles.text}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="$CAD"
          value={price.startsWith("$CAD ") ? price : `$CAD ${price}`}
          keyboardType="numeric" 
          onChangeText={(text) => setPrice(text)}
        />
        
        <DatePicker
          label="Availability"
          selectedDate={availabilityDate}
          onDateChange={setavailabilityDate}
        />
      
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Sign Up</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginBottom:60 }}>
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
