import { StyleSheet } from "react-native";
import { height } from "../../helper/responsiveLayout";

const styles = StyleSheet.create({
      container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.05,
  },
  googleButton: {
    width: 220,
    height: 50,
  },
})

export default styles;