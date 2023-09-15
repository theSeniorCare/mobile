import { View, Text } from "react-native";
import { Colors } from "../../../constants";

const SelfChatBubble = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 5,
        marginEnd: 10,
        backgroundColor: Colors.ui_grey_20,
      }}
    >
      <Text>{props.message}</Text>
    </View>
  );
};

export default SelfChatBubble;
