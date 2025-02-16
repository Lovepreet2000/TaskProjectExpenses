import { StyleSheet } from "react-native";
import { height } from "../../helper/responsiveLayout";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: height * 0.008,
    },
    backbtnStyle: {
        
        height: height * 0.04,
        width: height * 0.04,      
    },
    leftbtn: {
        width: '100%',
        height: '100%',
        resizeMode:'contain',
    },
    headerTitle: {
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        paddingTop:5   
    }
})

export default styles;