import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { appImages } from "../../utils/appImages";

interface CheckBoxProps {
  label: string;
  isChecked?: boolean;
  onToggle: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  isChecked = false,
  onToggle,
}) => {

  const handleToggle = () => {
    onToggle(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggle}>
      <Image
        source={isChecked ? appImages.checkedBox : appImages.uncheckedBox }
        style={styles.image}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});

export default CheckBox;
