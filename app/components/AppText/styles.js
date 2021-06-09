import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: Platform.OS === "android" ? 18 : 22,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
  },
});

export default styles;
