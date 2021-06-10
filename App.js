import React, { useState } from "react";
import Screen from "./app/components/Screen/Screen";
import AppPicker from "./app/components/AppPicker/AppPicker";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
