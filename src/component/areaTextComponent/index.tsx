import { Text, TextInput, View } from "react-native"
import { height } from "../../helper/responsiveLayout";
import Spacer from "../spacer";
import styles from "./styles";

interface AreaTextComponentProps {
    value: string,
    onTextChange: any,
    header: string,
    placeholder: string,
}

const AreaTextComponent : React.FC<AreaTextComponentProps> = ({value, onTextChange, header, placeholder}) => {
    return  (<View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerStyle}>{header}</Text>

      <Spacer height={height * 0.02} />

      {/* Input Field */}
      <TextInput
        value={value}
        onChangeText={onTextChange}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        multiline
        style={styles.inputStyle}
      />
    </View>);
}
export default AreaTextComponent;