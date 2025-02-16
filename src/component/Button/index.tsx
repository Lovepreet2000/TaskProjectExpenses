import React from "react";
import { View, Text, Touchable, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { height } from "../../helper/responsiveLayout";

interface ButtonProps {
    title: string,
    onPress: any,
    btnStyle?: ViewStyle,
    textStyle?:TextStyle,
}
const Button : React.FC<ButtonProps> = ({ title, onPress, btnStyle, textStyle }) => {
    return (<TouchableOpacity style={[styles.container, btnStyle]} onPress={onPress}>
        <Text style={[styles.titleStyle, textStyle]}>
           {title}
        </Text>
    </TouchableOpacity>)
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007bff", // Primary blue color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
    marginVertical: 8,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // White text
    textTransform: "uppercase",
  },
});