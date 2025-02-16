import { ScrollView, Task, Text, TouchableOpacity, View } from "react-native";
import { navigate, reset } from "../../helper/navigationServices";
import { constants, routeConstants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Spacer from "../../component/spacer";
import { height } from "../../helper/responsiveLayout";
import InputComponent from "../../component/inputComponent";
import { taskSubmissionCheck } from "../../utils/validations";
import { popTypes, ShowAlertMessage } from "../../utils/showAlerMessage";
import { addToDatabase } from "../../utils/databaseFun";
import { removeCategorySlice, resetReducerSlice, setNewCategorySlice } from "../../redux/slices/userSlice";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import AreaTextComponent from "../../component/areaTextComponent";
import DatePickerModal from "../../component/DatePicker";
import Button from "../../component/Button";
import CategoriesListModal from "../../component/categoriesModal";
import styles from "./styles";

const MainScreen = () => {
    const { totalBudget,categories, profileData } = useSelector((data: any) => data.user)
    const [amount, setAmount] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<Date | null>(null);
    const [categoriesModalVisible, setCategoriesModalVisible] = useState(false);
    const generateUniqueId = () => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 100000); // Random 5-digit number
    return `${timestamp}${randomNum}`;
};

  const dispatch = useDispatch();  
  
    const onSubmissionHandle =async () => {
        const isValid = taskSubmissionCheck(amount, category,date,description);
        if (isValid) {
            ShowAlertMessage(isValid, popTypes.error)
        } else {
           await addToDatabase(`/${profileData.suid}/expenses/${generateUniqueId()}`,{amount: amount, category:category, description: description, date: date.toISOString()})
            navigate(routeConstants.representation);
            setAmount('');
            setCategory('');
            setDescription('');
            setDate(null);
        }
    }

  return (<ScrollView style={styles.container}>
        <TouchableOpacity
      style={styles.logoutButton}
      onPress={() => {
        dispatch(resetReducerSlice({}))
        reset(routeConstants.login, 0)
      }}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>  
    
        <View>
      <View style={styles.budgetContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Monthly Budget:</Text>
          <Text style={styles.value}>{totalBudget}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigate(routeConstants.editCatergoriesBudget)}
        >
          <Text style={styles.editButtonText}>Edit Budget</Text>
        </TouchableOpacity>
      </View>

      {/* Graphical Representation Button */}
      <TouchableOpacity
        style={styles.graphButton}
        onPress={() => navigate(routeConstants.representation)}
      >
        <Text style={styles.graphButtonText}>Graphical Representation</Text>
      </TouchableOpacity>
    </View>

        <View>
            <Spacer height={height * 0.02} />
        <InputComponent
            value={amount}
            header={constants.amount}
            placeholder={constants.amount}
            onTextChange={(txt: string) => setAmount(txt)}
            keyboardType='numeric'
        />

        
        <TouchableOpacity onPress={()=> setCategoriesModalVisible(true)} >

        
            <InputComponent
            editable={false}
            value={category}
            header={constants.category}
            placeholder={constants.category}
            onTextChange={(txt: string) => setCategory(txt)}
            />
            </TouchableOpacity>
            
             <Button title="Add Category" textStyle={styles.addCattegoryText} btnStyle={styles.addCategory}  onPress={() => navigate(routeConstants.editCatergoriesBudget)}/>

        <AreaTextComponent
            value={description}
            header={constants.description}
            placeholder={constants.description}
            onTextChange={(txt: string) => setDescription(txt)}
        />

        <DatePickerModal
            header={constants.date}
            placeholder={constants.date}
            date={date}
            onDateChange={(selDate: Date) => setDate(selDate)}
        />

        <Spacer height={height * 0.02}/>

        <Button
            title="Submit"
            onPress={onSubmissionHandle}
        />
        
         <CategoriesListModal 
               visible={categoriesModalVisible}
                onClose={() => setCategoriesModalVisible(false)}
                onSelectCategory={(category) => {
                setCategory(category);
                setCategoriesModalVisible(false);
            }}
                categories={categories} // Pass categories from parent
            />
    
           
          <Spacer height={height * 0.02}/>
        </View>


    </ScrollView>)
}
export default MainScreen;