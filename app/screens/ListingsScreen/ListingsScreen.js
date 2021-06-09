import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../../components/Screen/Screen";
import AppCard from "../../components/AppCard/AppCard";
import ListItemSeparator from "../../components/ListItemSeparator/ListItemSeparator";
import colors from "../../config/colors";

const listings = [
  {
    id: 0,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 1,
    title: "Sweet couch for sale",
    price: 400,
    image: require("../../assets/couch.jpg"),
  },
];

const _renderItem = ({ item }) => (
  <AppCard title={item.title} subtitle={`$${item.price}`} image={item.image} />
);

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        renderItem={_renderItem}
        data={listings}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(listing) => listing.title}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
