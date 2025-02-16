import { StyleSheet } from "react-native";
import { height, width } from "../../helper/responsiveLayout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    contentStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    chartContainer: {
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#333",
    },
    noDataContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    noDataText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#666",
    }
 
});
export default styles;