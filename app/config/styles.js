import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  colors: {
    black: "#000",
    danger: "#ff5252",
    light: "#f8f4f4",
    medium: "#6e6969",
    dark: "#0c0c0c",
    offWhite: "#f1e6e6",
    primary: "#fc5c65",
    secondary: "#4ecdc4",
    white: "#fff",
  },
};
