import { StyleSheet } from "react-native";
import { height, width } from "../../helper/responsiveLayout";

const styles = StyleSheet.create({
 container: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android shadow
    marginBottom: 10,
  },
  headerStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
  inputStyle: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    color: "#333",
  },
})

export default styles;