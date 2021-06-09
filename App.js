import React from "react";
import Screen from "./app/components/Screen/Screen";
import { TextInput } from "react-native";

export default function App() {
  return (
    <Screen>
      <TextInput
        placeholder="First name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
