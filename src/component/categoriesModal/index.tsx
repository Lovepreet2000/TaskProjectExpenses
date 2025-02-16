import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    FlatList,
    TouchableOpacity,

    StyleSheet,
} from "react-native";

interface CategoryModalProps {
    visible: boolean;
    onClose: () => void;
    onSelectCategory: (categoryName: string) => void;
    categories: string[];
}

const CategoriesListModal: React.FC<CategoryModalProps> = ({
    visible,
    onClose,
    onSelectCategory,
    categories,

}) => {

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Select a Category</Text>

                    {/* Category List */}
                    {categories && 
                        <FlatList
                        data={Object?.values(categories)}
                        keyExtractor={(item) => item}
                        renderItem={({ item ,index}) => (
                            <View style={styles.categoryRow}>
                                <TouchableOpacity
                                    style={styles.categoryItem}
                                    onPress={() => {
                                        onSelectCategory(item?.categoryName);
                                        onClose();
                                    }}
                                >
                                    <Text style={styles.categoryText}>{item?.categoryName}</Text>
                                </TouchableOpacity>
                            
                            </View>
                        )}
                    />
                    }
                   

                    {/* Close Button */}
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    categoryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    categoryItem: {
        flex: 1,
    },
    categoryText: {
        fontSize: 18,
    },
    deleteText: {
        fontSize: 12,
        color: "red",
    },
    closeButton: {
        marginTop: 10,
        alignSelf: "center",
    },
    closeText: {
        fontSize: 16,
        color: "red",
    },
});




export default CategoriesListModal;
