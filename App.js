import React, { useState } from "react";
import Screen from "./app/components/Screen/Screen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput
        placeholder="First name"
        onChangeText={(text) => setFirstName(text)}
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
