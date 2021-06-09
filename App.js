import React from "react";
import { View } from "react-native";
import Screen from "./app/components/Screen/Screen";
import Icon from "./app/components/Icon/Icon";
import ListItem from "./app/components/ListItem/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My Title"
        ImageComponent={
          <Icon backgroundColor="red" iconColor="white" name="email" />
        }
      />
    </Screen>
  );
}
