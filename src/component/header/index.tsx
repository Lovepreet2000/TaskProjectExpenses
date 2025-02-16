import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
interface HeaderProps {
    title?: string,
    onLeftPress?: any,
    leftIcon?: any
}
const Header: React.FC<HeaderProps> = ({title, onLeftPress, leftIcon}) => {
    return (<View style={styles.container}>
        <TouchableOpacity style={styles.backbtnStyle} onPress={onLeftPress}>
            <Image style={styles.leftbtn} source={leftIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>)
}

export default Header;