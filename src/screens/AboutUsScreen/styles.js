import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "../../constants/index";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: Colors.main_color,
  },
  mainContainer: {
    padding: 20,
    paddingTop: 0,
  },
  normalText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.main_green,
    marginBottom: 10,
  },
});

export default styles;
