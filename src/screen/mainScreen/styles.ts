import { StyleSheet } from "react-native";
import { width } from "../../helper/responsiveLayout";

const styles = StyleSheet.create({
     container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
  },
  budgetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    marginLeft: 8,
    color: "#007bff",
  },
  editButton: {
    padding: 6,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 6,
    backgroundColor: "#007bff",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  remainingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  remainingValue: {
    fontSize: 16,
    marginLeft: 8,
    color: "red",
    fontWeight: "bold",
  },
  graphButton: {
    // backgroundColor: "#28a745",
    // paddingHorizontal: 10,
   width:width * 0.4,
    // paddingVertical:5,
    // borderRadius: 6,
    alignSelf: "flex-enßd",
  },
  graphButtonText: {
    color: "#28a745",
    fontWeight: "bold",
      fontSize: 14,
    textAlign:'right'
  },
 taskSubHeader: {
        fontSize: 18,
        fontWeight:'700',
    },
    taskInfo: {
        fontSize: 15,
        fontWeight: '600'
    },
    addNewCategoryContainer: {
        alignSelf: 'flex-end',
    },
    addNewCategoryText: {
        color:'blue',
    },
      addCategory: { width: width * 0.3,paddingHorizontal:8, alignSelf: 'flex-end' },
    addCattegoryText: {
        fontSize: 12,
  },
  logoutButton: {
    width: '25%',
    alignSelf:'flex-end',
    padding: 6,
    marginBottom:10,
    borderRadius: 6,
    backgroundColor: "red",
  },
  logoutText: {
    textAlign: 'center',
    fontWeight: "bold",
     color:'#fff',
  }
})

export default styles;