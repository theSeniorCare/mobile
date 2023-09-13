import { View, Text, Button } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'

const Menu = () => {
  return (
    <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
      <Button title='Logout' onPress={()=> FIREBASE_AUTH.signOut()}/>
    </View>
  )
}

export default Menu