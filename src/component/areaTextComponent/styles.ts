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
    elevation: 3, // For Android shadow effect
    marginBottom: 12,
    width: width * 0.9, // Responsive width
    alignSelf: "center",
  },
  headerStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  inputStyle: {
    minHeight: 100, // Ensures multiline input has enough space
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    color: "#333",
    textAlignVertical: "top", // Ensures text starts from top in multiline
  },
});


export default styles;