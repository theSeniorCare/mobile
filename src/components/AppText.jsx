import React from "react";
import { Text } from "react-native";
import { Colors } from "../constants";

const AppText = ({ children, size = 16, color, variant, weight, style }) => {
  return (
    <Text
      style={{
        fontSize: size,
        fontWeight: weight,
        color:
          color ??
          (variant === "secondary" ? Colors.main_green : Colors.green_accent),
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default AppText;
