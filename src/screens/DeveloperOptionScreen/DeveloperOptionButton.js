import { View, Text, Button } from 'react-native'
import React from 'react'

const DeveloperOptionButton = ({ navigation }) => {
    return (
        <Button title="developer option" onPress={() => { navigation.navigate('DeveloperOption') }}>
        </Button>
    )
}

export default DeveloperOptionButton