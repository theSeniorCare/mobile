import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 40,
    width: "100%",
  },
  ChatListItemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.main_color,
    borderBottomWidth: 2,
    borderBottomColor: Colors.green_text,
  },
  ProfilePic: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    margin: 10,
  },
  ChatListItemDesc: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 15,
  },
});

export default styles;
