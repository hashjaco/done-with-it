import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen/Screen";
import ListItem from "../../components/ListItem/ListItem";
import colors from "../../config/colors";

const AccountScreen = () => {
  return (
    <Screen bgColor={colors.offWhite}>
      <View style={styles.userInfo}>
        <ListItem
          title="Hashim Jacobs"
          subTitle="hashimjacobs@gmail.com"
          image={require("../../assets/hashim.jpg")}
        />
      </View>
      <View style={styles.options}></View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    paddingVertical: 15,
  },
  options: {
    paddingVertical: 15,
  },
});

export default AccountScreen;
