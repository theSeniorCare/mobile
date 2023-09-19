import { View, Text } from "react-native";
import { Colors } from "../../../constants";

const SelfChatBubble = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginEnd: 10,
        marginLeft: "50%",
        alignSelf: "flex-end",
        backgroundColor: Colors.ui_grey_20,
        borderRadius: 10,
        padding: 6,
        paddingHorizontal: 10,
      }}
    >
      <Text>{props.message}</Text>
    </View>
  );
};

export default SelfChatBubble;
