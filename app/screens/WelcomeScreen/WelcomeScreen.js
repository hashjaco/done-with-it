import React from "react";
import { View, ImageBackground, Image, Text, Platform } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      blurRadius={Platform.OS === "android" ? 2 : 8}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton color="secondary" title="Register" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
