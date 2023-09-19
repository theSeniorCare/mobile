import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import AppText from "../components/AppText";
import Spacer from "../components/Spacer";
import { Colors } from "../constants";

const sections = [
  {
    hero: require("assets/Images/about_2.png"),
    title: "WHO WE ARE",
    text: "Senior Care is a dedicated platform that aims to redefine senior care by focusing on the most vital aspect of it - the human connection. Our mission is to bring joy, warmth, and support into the lives of seniors like you through carefully curated services and compassionate companionship.",
  },
  {
    hero: require("assets/Images/about_3.png"),
    text: "At Senior Care, we understand that each chapter of life brings its unique joys and challenges. That's why we're excited to introduce you to a new way of enhancing your senior years, one that revolves around companionship, care, and the freedom to live life to the fullest.",
  },
  {
    hero: require("assets/Images/about_4.png"),
    title: "HOW IT WORKS",
    text: "Sign Up: Visit our website or call us to get started. Tell Us Your Preferences: We'll match you with a care companion based on your needs and interests. Meet Your Companion: Meet your new friend and start creating beautiful memories together. Enjoy Life: Let us handle the details while you focus on living your best life.",
  },
  {
    hero: require("assets/Images/about_5.png"),
    title: "WHY CHOOSE US",
    text: "Experience: With years of experience in senior care, we understand your unique requirements. Personalized Matches: We handpick companions based on your personality, interests, and needs. Safety First: Our rigorous screening process ensures your security and peace of mind.Support: Our customer care team is here to assist you every step of the way.",
  },
];

// I think we should use a webview here to display the about page
// as it could change the content of the page without having to update the app
const AboutScreen = () => {
  const { width, height } = useWindowDimensions();

  const renderSection = (section, index) => {
    const backgroundColor =
      index % 2 === 1 ? Colors.main_color : Colors.main_green;
    const textColor = index % 2 === 1 ? Colors.main_green : Colors.main_color;

    return (
      <View key={index} style={[styles.section, { backgroundColor }]}>
        <Image
          style={[styles.sectionImage, { maxWidth: width * 0.5 }]}
          source={section.hero}
        />
        <Spacer height={16} />
        <AppText size={18} weight="bold" color={textColor}>
          {section.title}
        </AppText>
        <Spacer height={8} />
        <AppText color={textColor} style={{ textAlign: "center" }}>
          {section.text}
        </AppText>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ ...styles.landingSection, minHeight: height * 0.3 }}>
        <View style={{ flexDirection: "column", margin: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <AppText
              size={24}
              color={Colors.green_text}
              style={styles.landingTitle}
            >
              {"WHERE\n\nMEETS"}
            </AppText>
            <AppText
              size={24}
              color={Colors.green_text}
              style={{ ...styles.landingTitle, marginStart: -14 }}
            >
              {"\nEMPATHY\n\nSYNERGY"}
            </AppText>
          </View>

          <Spacer height={16} />

          <AppText color="#82746A" size={16} weight="medium">
            {"Connecting Seniors with Caring\nand Vetted Carekeepers"}
          </AppText>
        </View>
        <Image
          style={styles.landingImage}
          source={require("assets/Images/about_1.png")}
        />
      </View>

      {sections.map(renderSection)}
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  landingSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.main_color,
  },
  landingTitle: {
    fontWeight: "800",
  },
  landingImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    margin: 12,
  },

  section: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionImage: {
    height: 100,
    resizeMode: "contain",
    margin: 12,
  },
});
