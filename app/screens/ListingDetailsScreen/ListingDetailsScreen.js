import React from "react";
import {View, Image, StyleSheet} from "react-native";
import AppText from "../../components/AppText/AppText";
import ListItem from "../../components/ListItem/ListItem"
import colors from "../../config/colors"

const ListingDetailsScreen = () => {
  return <View>
    <Image style={styles.image} source={require('../../assets/jacket.jpg')}/>
    <View style={styles.detailsContainer}>
      <AppText style={styles.title}>Red jacket for sale</AppText>
      <AppText style={styles.price}>$100</AppText>
      <View style={styles.userContainer}><ListItem
        image={require("../../assets/mosh.jpg")}
        title="Hashim Jacobs"
        subTitle="5 Listings"
      /></View>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    width: "100%"
  },
  image: {
    width: "100%",
    height: 300
  },
  price: {
    color: colors.secondary,
    fontSize: 22
  },
  title: {
    color: colors.black,
    fontSize: 24,
    marginBottom: 20
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen;
