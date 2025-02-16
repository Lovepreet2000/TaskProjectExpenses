import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { popTypes, ShowAlertMessage } from '../../utils/showAlerMessage';
import { height, width } from '../../helper/responsiveLayout';

// Define types for props
interface AddCategoryModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (category: { categoryName: string; budget: number }) => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({ visible, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [budget, setBudget] = useState<string>('');

  // Handle submit action
  const handleSubmit = () => {
    if (categoryName && budget) {
      onSubmit({ categoryName, budget: parseFloat(budget) });
      setCategoryName('');
      setBudget('');
    } else {
      ShowAlertMessage('Please fill in all fields',popTypes.error);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Add Category</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Category Name"
            value={categoryName}
            onChangeText={setCategoryName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Budget"
            value={budget}
            onChangeText={setBudget}
            keyboardType="numeric"
          />
          
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Add" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Styles for the modal and inputs
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    width: width,
    height:height,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default AddCategoryModal;
