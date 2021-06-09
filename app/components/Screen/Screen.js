import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../../config/colors";

const Screen = ({ bgColor = colors.white, children }) => {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: bgColor }]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
