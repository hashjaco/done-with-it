import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";

const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <Image
              style={styles.image}
              source={image}
              title={title}
              subTitle={subTitle}
            />
          )}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.light,
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
