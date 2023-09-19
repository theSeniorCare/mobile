import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "../../constants/index";

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
  contentContainer: {
    paddingVertical: 20,
  },
  normalText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.main_green,
    marginBottom: 30,
  },
  questionText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.lightBlack,
    marginBottom: 5,
  },
});

export default styles;
