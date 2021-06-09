import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  closeIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});

export default styles;
