import { View, Text, Button } from 'react-native'
import React from 'react'

const DeveloperOption = ({ navigation }) => {
  return (
    <View>
      <Button title='back' onPress={() => navigation.goBack()} />
      <Text>Goto chat screen </Text>
      <Button title='chat screen' onPress={() => navigation.navigate('AppStack', { screen: 'Chat' })} />
    </View>
  )
}

export default DeveloperOption