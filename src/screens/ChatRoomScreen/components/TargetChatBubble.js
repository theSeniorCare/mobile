import { View, Text } from "react-native";

const TargetChatBubble = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginStart: 10,
      }}
    >
      <Text>{props.message}</Text>
    </View>
  );
};

export default TargetChatBubble;
