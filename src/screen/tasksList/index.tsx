import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { tasksList , Task} from "../../utils/taskData";
import TaskItemComponent from "../../component/taskItemComponet";
import { constants } from "../../utils/constants";
import Header from "../../component/header";

const TasksList = () => {
    
    return (
        <View style={styles.container}>

            <Header
            title={constants.TasksList}
            />
            <FlatList data={tasksList}
                renderItem={({ item, index }: { item: Task; index: number }) => <TaskItemComponent item={item} />}
            />    
        </View>
    )
}

export default TasksList;