import { View, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Landing');
  }, 3000);

  return (
    <View style={styles.container}>
      <Image
        style={styles.horizontalLogo}
        resizeMode="contain"
        source={require('../../assets/Images/logo_horizontal.png')}
      />

      <Image
        style={styles.simpleLogoIcon}
        resizeMode="contain"
        source={require('../../assets/Images/logo_icon.png')}
      />
      <View style={styles.divider}/>
    </View>
  );
};

export default Splash;
