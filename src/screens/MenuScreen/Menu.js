import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const createMenuSections = (userType) => {
  const accountRows = [
    { title: "Profile", target: "profile" },
    { title: "Appointments", target: "appointments" },
  ];

  switch (userType) {
    case "senior":
      accountRows.push(
        { title: "Medical History", target: "medical" },
        { title: "Special Needs", target: "needs" },
      );
      break;
    case "caregiver":
      accountRows.push(
        { title: "Education", target: "education" },
        { title: "About Me", target: "aboutCaregiver" },
      );
      break;
  }

  return [
    {
      title: "Account",
      rows: accountRows,
    },
    {
      title: "Support",
      rows: [
        { title: "Get Help", target: "help" },
        { title: "Terms of Use", target: "terms" },
        { title: "Privacy Policy", target: "privacy" },
        { title: "About Us", target: "about" },
      ],
    },
  ];
};

const Menu = ({ navigation }) => {
  const sections = createMenuSections("senior");
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {sections.map(({ title, rows }, sid) => (
        <View key={sid}>
          <Spacer height={8} backgroundColor={Colors.beige_accent} />
          <AppText
            style={styles.sectionTitle}
            variant="primary"
            size={14}
            weight={500}
          >
            {title}
          </AppText>
          {rows.map((row, rid) => (
            <TouchableOpacity
              key={`${sid}_${rid}`}
              onPress={() => navigation.navigate(row.target)}
            >
              <View style={styles.row}>
                <AppText variant="primary" size={14}>
                  {row.title}
                </AppText>
                <Image source={require("assets/icons/chevron-right.png")} />
              </View>
              {rid !== rows.length - 1 && (
                <Spacer
                  marginStart={16}
                  height={1}
                  backgroundColor={Colors.main_green}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <Spacer height={8} backgroundColor={Colors.beige_accent} />

      <TouchableOpacity
        onPress={() => FIREBASE_AUTH.signOut()}
        style={styles.logoutButton}
      >
        <AppText
          size={14}
          variant="primary"
          weight="700"
          style={styles.logoutText}
        >
          Logout
        </AppText>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },

  section: {},
  sectionTitle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  rowTitle: {},
  logoutButton: {
    alignSelf: "flex-start",
  },
  logoutText: {
    textDecorationLine: "underline",
    padding: 16,
  },
});
