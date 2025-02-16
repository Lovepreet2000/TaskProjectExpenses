import { View } from "react-native";

const Spacer = ({ height, width, flex }: { height?: number, width?: number , flex?: number}) => {
    return (<View style={{height: height , width: width, flex: flex}} />
        )
}
export default Spacer;