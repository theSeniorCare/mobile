import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  useFonts,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar.js";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/index.js";
import { useNavigation } from "@react-navigation/native";

export default AboutUs = ({ userType }) => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleBack = (navigation) => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        title="About Us"
        titleColor={Colors.main_green}
        leadingView={
          <TouchableOpacity onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.main_green} />
          </TouchableOpacity>
        }
      />
      <Spacer marginBottom={20} height={8} backgroundColor={Colors.beige_accent}  />

      <View style={styles.mainContainer}>
        <Text style={styles.normalText}>{aboutUs}</Text>
        <Text style={styles.normalText}>{aboutUs2}</Text>
        <Text style={styles.normalText}>{aboutUs3}</Text>
        <Text style={styles.normalText}>{aboutUs4}</Text>
      </View>
    </SafeAreaView>
  );
};



const aboutUs4 =
  "Experience: With years of experience in senior care, we understand your unique requirements. Personalized Matches: We handpick companions based on your personality, interests, and needs. Safety First: Our rigorous screening process ensures your security and peace of mind. Support: Our customer care team is here to assist you every step of the way.";
const aboutUs3 =
  "Sign Up: Visit our website or call us to get started. Tell Us Your Preferences: We'll match you with a care companion based on your needs and interests. Meet Your Companion: Meet your new friend and start creating beautiful memories together. Enjoy Life: Let us handle the details while you focus on living your best life.";
const aboutUs2 =
  "At Senior Care, we understand that each chapter of life brings its unique joys and challenges. That's why we're excited to introduce you to a new way of enhancing your senior years, one that revolves around companionship, care, and the freedom to live life to the fullest.";
const aboutUs =
  "Senior Care is a dedicated platform that aims to redefine senior care by focusing on the most vital aspect of it - the human connection. Our mission is to bring joy, warmth, and support into the lives of seniors like you through carefully curated services and compassionate companionship.";