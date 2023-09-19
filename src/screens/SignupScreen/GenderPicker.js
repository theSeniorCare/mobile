import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

const GenderPicker = () => {
  const [gender, setGender] = useState(null);

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  return (
    <View style={styles.input}>
      <RNPickerSelect
        placeholder={{ label: 'Select a gender', value: null }}
        items={genderOptions}
        onValueChange={(value) => setGender(value)}
        style={{
          inputIOS: {
            fontSize: 16,
            color: 'black',
          },
          inputAndroid: {
            fontSize: 16,
            color: 'black',
          },
        }}
        value={gender}
      />
    </View>
  );
};

export default GenderPicker;