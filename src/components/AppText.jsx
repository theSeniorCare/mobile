import React from 'react'
import { Text } from 'react-native'
import { Colors } from '../constants'

const AppText = ({children, size = 16, variant, weight, style}) => {
  return (
      <Text style={{
        ...style,
        fontSize: size,
        fontWeight: weight,
        color: variant === 'secondary' ? Colors.main_green : Colors.green_accent,
      }}>{children}</Text>
  )
}

export default AppText
