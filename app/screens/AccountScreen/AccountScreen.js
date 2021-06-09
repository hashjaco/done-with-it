import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../../components/Screen/Screen";
import ListItem from "../../components/ListItem/ListItem";
import colors from "../../config/colors";
import Icon from "../../components/Icon/Icon";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      color: "white",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      color: "white",
      backgroundColor: colors.secondary,
    },
  },
];

const _renderItem = ({ item }) => {
  const { title, icon } = item;
  return (
    <ListItem
      title={title}
      IconComponent={
        <Icon
          name={icon.name}
          backgroundColor={icon.backgroundColor}
          iconColor={icon.color}
        />
      }
    />
  );
};

const AccountScreen = () => {
  return (
    <Screen>
      <ListItem
        title="Hashim Jacobs"
        subTitle="hashimjacobs@gmail.com"
        image={require("../../assets/hashim.jpg")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={_renderItem}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={
          <Icon iconColor="white" backgroundColor="#ffe66d" name="logout" />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});

export default AccountScreen;
