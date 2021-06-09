import React from "react";
import { Image, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from "./styles";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
        </View>
      <Image source={require("../../assets/chair.jpg")} style={styles.image} />
    </View>
  );
};

export default ViewImageScreen;
