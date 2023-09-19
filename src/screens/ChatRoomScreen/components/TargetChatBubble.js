import { View, Text } from "react-native";
import { Colors } from "../../../constants";

const TargetChatBubble = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginStart: 10,
        maxWidth: "50%",
        alignSelf: "flex-start",
        backgroundColor: Colors.ui_grey_90,
        borderRadius: 10,
        padding: 6,
      }}
    >
      <Text style={{ color: "white" }}>{props.message}</Text>
    </View>
  );
};

export default TargetChatBubble;
