import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import styles from "./styles";

const AppButton = ({ color = "primary", title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
