import { Alert, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { goBack } from "../../helper/navigationServices";
import Header from "../../component/header";
import { appImages } from "../../utils/appImages";
import styles from "./styles";
import Button from "../../component/Button";
import AddCategoryModal from "../../component/addCategory";
import { useState } from "react";
import { addToDatabase, getDataFromDatabase, pushToDatabase, removeDataWithQuery } from "../../utils/databaseFun";
import InputComponent from "../../component/inputComponent";
import { height, width } from "../../helper/responsiveLayout";
import Spacer from "../../component/spacer";
import { setNewCategorySlice, setTotalBudgetSlice } from "../../redux/slices/userSlice";
import { getTotalBudget } from "../../helper/globalFunction";

interface Category {
  categoryName: string;
  budget: number;
}

const CategoryWithBudget = () => {
    const { categories,profileData,totalBudget } = useSelector(data => data.user);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const dispatch = useDispatch();
  
    const getCategories = async () => {
      const categoriesData = await getDataFromDatabase(`${profileData.suid}/categories`);
      dispatch(setNewCategorySlice(categoriesData));
      dispatch(setTotalBudgetSlice(getTotalBudget(categoriesData)));
    }

    // Handle the category submission
    const handleAddCategory = async (category: Category) => {
        const data =  await pushToDatabase(`${profileData.suid}/categories`, category);
    
      if (data) {
        await getCategories()
        setModalVisible(false); // Close the modal after submitting 
      }
    };

    const removeCategory = async (category: Category) => {
      const removed = await removeDataWithQuery(`${profileData.suid}/categories`, 'categoryName', category['categoryName'])
      removed && getCategories();
    }
      return (<View style={styles.container}>
        <Header title={'Edit Budget'} leftIcon={appImages.backIcon} onLeftPress={() => goBack()} />
        <TouchableOpacity
          style={styles.addCategory}
        onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addCategoryText}>Add Category</Text>
</TouchableOpacity>
    
        <Spacer height={height * 0.02} />
      {categories && Object.entries(categories).map(([key, value]) => (
        <View key={key} style={{flexDirection:'row',marginBottom:height * 0.01, alignItems:'center', justifyContent:'space-between', width:'100%'}}>
          <Text style={{width:width * 0.3,}}>{value?.categoryName} : </Text>
          
          <Text>
            {String(value?.budget)}
          </Text>
            
          <Button title="Remove" btnStyle={styles.removeBtn}  textStyle={styles.removeText} onPress={() => removeCategory(value)}/>
       
       </View>
      ))}
        
        {totalBudget && 
           <View style={{flexDirection:'row'}}>
          <Text>Total Budget:</Text>
          <Text>
            {totalBudget}
          </Text>
        </View> 
         } 
        
        {totalBudget == 0 && 
          <View style={styles.noCategoryContainer}>
            <Text style={styles.noCategoryText}>Please Add Category</Text>  
            </View >
        }
       
        
      <AddCategoryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddCategory}
      />
    </View>)
}

export default CategoryWithBudget;