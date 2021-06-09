import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";

const AppCard = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default AppCard;
