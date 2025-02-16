import { StyleSheet } from "react-native";
import { height, width } from "../../helper/responsiveLayout";

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  addCategory: {
    alignSelf: "flex-end",
  },
  addCategoryText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
    marginBottom: height * 0.01,
  },
  categoryName: {
    width: width * 0.3,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  budgetText: {
    fontSize: 16,
    color: "#333",
  },
  removeBtn: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  totalBudgetContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.02,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  totalBudgetLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  totalBudgetValue: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
   noCategoryContainer: {
    backgroundColor: "#ffebee", // Light red background
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  noCategoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d32f2f", // Red text for visibility
  },
});
export default styles;