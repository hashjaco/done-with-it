import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const AppTextInput = ({ placeholder, onChangeText, style }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons />
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {},
  textInput: {},
});

export default AppTextInput;
