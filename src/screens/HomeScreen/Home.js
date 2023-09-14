import { View, Text } from 'react-native'
import React from 'react'

const Home = ({ userType }) => {
  return (
    <View>
      <Text>Home</Text>
      {userType? <Text>{userType}</Text> : <Text>Nothing</Text>}
    </View>
  );
}


export default Home