import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH,FIREBASE_DB } from './FirebaseConfig';

import { AuthStack } from './src/routes/AuthStack';
import { AppStack } from './src/routes/AppStack';
import { ref, get } from "firebase/database";



export default function App() {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);

      

// Reference to the user's data in the Firebase Realtime Database
      const userRef = ref(FIREBASE_DB, 'users/' + user.uid);

      // Retrieve the user data from the database
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const userType = userData.userType;
            setUserType(userType)
            // Now you have the userType from the database
            console.log('User Type:', userType);
            // You can use the userType as needed
          } else {
            // Handle the case where the user data does not exist
            console.log('User data does not exist');
          }
        })
        .catch((error) => {
          // Handle error while retrieving data from Firebase
          Alert.alert('Firebase Error:', error.message);
        });

    });
  }, []);
  return (
    <NavigationContainer>
      {user ? <AppStack userType={userType} /> : <AuthStack />}
    </NavigationContainer>
  );
}
