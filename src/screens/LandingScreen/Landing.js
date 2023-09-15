import { View, Text, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';
import {
  useFonts,
  Figtree_500Medium,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';

const Landing = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Onboarding
      onDone={() => navigation.navigate('Login')}
      skipToPage={2}
      imageContainerStyles={{ paddingBottom: 0 }}
      pages={[
        {
          backgroundColor: '#839D8E',
          titleStyles: styles.title,
          subTitleStyles: styles.subTitle,
          title: 'WHO WE ARE',
          subtitle:
            'Senior Care is a dedicated platform that aims to redefine senior care by focusing on the most vital aspect of it - the human connection.',
          image: (
            <Image
              source={require('../../assets/Images/onboarding_one.png')}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        },
        {
          backgroundColor: '#FEEADA',
          titleStyles: styles.titleGreen,
          subTitleStyles: styles.subTitleGreen,
          title: 'HOW IT WORKS',
          subtitle:
            "Sign Up: Visit our website or call us to get started. Tell Us Your Preferences: We'll match you with a care companion based on your needs and interests. Meet Your Companion: Meet your new friend and start creating beautiful memories together.",
          image: (
            <Image
              source={require('../../assets/Images/onboarding_two.png')}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        },
        {
          backgroundColor: '#839D8E',
          titleStyles: styles.title,
          subTitleStyles: styles.subTitle,
          title: 'WHY CHOOSE US',
          subtitle:
            'Experience: With years of experience in senior care, we understand your unique requirements. Personalized Matches: We handpick companions based on your personality, interests, and needs.',
          image: (
            <Image
              source={require('../../assets/Images/onboarding_three.png')}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        },
      ]}
    />
  );
};

export default Landing;
