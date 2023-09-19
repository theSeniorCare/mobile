import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
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


export default PrivacyPolicyScreen = ({ userType }) => {
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

  renderView=(item, index)=>{

const myData = item.item;

    return (
      <View key={item+index}>
        <Text style={styles.questionText}>Q) {myData.question}</Text>
        <Text style={styles.normalText}>{myData.answer}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        title="Privacy Policy"
        titleColor={Colors.main_green}
        leadingView={
          <TouchableOpacity onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.main_green} />
          </TouchableOpacity>
        }
      />
      <Spacer
        marginBottom={20}
        height={8}
        backgroundColor={Colors.beige_accent}
      />

      <View style={styles.mainContainer}>
        <FlatList
          data={privacyPolicyData}
          contentContainerStyle={styles.contentContainer}
          renderItem={renderView}
        />
      </View>
    </SafeAreaView>
  );
};

const privacyPolicyData = [
  {
    question: "What information do we collect?",
    answer:
      "When you sign up for Senior Care, we ask you to provide us with your name, email address, phone number, and other relevant information that will help us match you with the right care companion. We may also collect information about your health, medical history, and previous health conditions, as well as any allergies or sensitivities. We also collect information about how you use our website, including the pages you visit, your browser type, and IP address",
  },
  {
    question: "How do we use your information?",
    answer:
      "We use your information to match you with the right care companion and to personalize the services we offer you. We may use your information to contact you about new services, promotions, or special offers. We may also use your information to improve our website and services and to respond to your inquiries and requests",
  },
  {
    question: "How do we protect your information?",
    answer: "We take your privacy seriously and have put in place appropriate technical and organizational measures to safeguard your personal information from unauthorized access, modification, or disclosure. We store your information in secured databases and use encryption to protect it during transmission.",
  },
  {
    question: "Do we share your information?",
    answer: "We do not sell, rent, or disclose your personal information to third parties for their marketing purposes without your consent. However, we may share your information with our care companion partners to provide you with better care services. We may also share your information with our third-party service providers who help us operate our website and provide our services.",
  },
  {
    question: "What are your rights?",
    answer: "You have the right to access, correct, and delete your personal information. You also have the right to object to our processing of your information or to restrict our use of it. To exercise these rights, please contact us at the email address provided below.",
  },
  {
    question: "Changes to our Privacy Policy",
    answer: "We may update this privacy policy from time to time to reflect changes in our information practices or legal requirements. We will post the updated version of the policy on our website.",
  },
  {
    question: "Contact Us",
    answer: "If you have any questions or concerns about our privacy policy, please contact us at \nseniorcare@seniorcare.com.",
  },
];
