import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 40,
    width: "100%",
  },
  ProfileSection: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.main_color,
  },
  ProfilePic: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    margin: 10,
  },
});

export default styles;
