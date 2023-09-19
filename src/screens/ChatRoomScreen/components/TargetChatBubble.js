import { View, Text } from "react-native";
<<<<<<< HEAD
import { Colors } from "../../../constants";
=======
>>>>>>> main

const TargetChatBubble = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginStart: 10,
<<<<<<< HEAD
        maxWidth: "50%",
        alignSelf: "flex-start",
        backgroundColor: Colors.ui_grey_90,
        borderRadius: 10,
        padding: 6,
      }}
    >
      <Text style={{ color: "white" }}>{props.message}</Text>
=======
      }}
    >
      <Text>{props.message}</Text>
>>>>>>> main
    </View>
  );
};

export default TargetChatBubble;
