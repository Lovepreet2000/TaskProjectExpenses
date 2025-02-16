import { Text, TouchableOpacity, View } from "react-native"
import { Task } from "../../utils/taskData";
import moment from 'moment'
import { formattedDateDD_MM_YYYY } from "../../helper/globalFunction";
import styles from "./styles";
import { navigate } from "../../helper/navigationServices";
import { routeConstants } from "../../utils/constants";
import Spacer from "../spacer";
import { height } from "../../helper/responsiveLayout";
import React from "react";

const TaskItemComponent = ({ item }: { item: Task }) => {
    const handleOnPress = () => {
       navigate(routeConstants.taskDetail,{details: item})
    }
    return (
        <React.Fragment>
            
        <TouchableOpacity onPress={handleOnPress} style={styles.container}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{formattedDateDD_MM_YYYY(item.deadline)}</Text>
        <Text>{item.priority}</Text>
        <Text>{item.status}</Text>
        </TouchableOpacity>

        <Spacer height={height * 0.02} />
         </React.Fragment>
        )
}

export default TaskItemComponent;