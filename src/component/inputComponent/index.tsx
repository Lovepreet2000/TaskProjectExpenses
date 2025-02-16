import { Text, TextInput, View, ViewStyle } from "react-native";
import { height } from "../../helper/responsiveLayout";
import Spacer from "../spacer";
import styles from "./styles";

interface InputComponentProps {
    value: string;
    onTextChange: (text: string) => void;
    header: string;
    placeholder: string;
    editable?: boolean;
    containerStyle?: ViewStyle;
    inputStyle?: ViewStyle;
    keyboardType?: "default" | "numeric" | "number-pad" | "decimal-pad"; // Allow different keyboard types
}

const InputComponent: React.FC<InputComponentProps> = ({ 
    value, 
    onTextChange, 
    header, 
    placeholder, 
    editable = true, 
    containerStyle,
    inputStyle,
    keyboardType = "default" // Default keyboard type
}) => {
    console.log(value,'vualeee')
    return (
       <View style={[styles.container, containerStyle]}>
      {header && (
        <>
          <Spacer height={height * 0.01} />
          <Text style={styles.headerStyle}>{header}</Text>
          <Spacer height={height * 0.01} />
        </>
      )}

      <TextInput
        value={value}
        onChangeText={onTextChange}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        style={[styles.inputStyle, inputStyle]}
        editable={editable}
        keyboardType={keyboardType}
      />

      <Spacer height={height * 0.01} />
    </View>
    );
};

export default InputComponent;
