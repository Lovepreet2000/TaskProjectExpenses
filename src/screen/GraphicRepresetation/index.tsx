import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import database from "@react-native-firebase/database";
import Header from "../../component/header";
import { Image } from "react-native-svg";
import { appImages } from "../../utils/appImages";
import styles from "./styles";
import { goBack } from "../../helper/navigationServices";
import { useSelector } from "react-redux";

const screenWidth = Dimensions.get("window").width;

const RealtimeDatabasePieChart = () => {
    const { profileData } = useSelector(data => data.user)
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await database().ref(`/user/${profileData.suid}/expenses`).once("value");

                if (snapshot.exists()) {
                    const data = snapshot.val();
                    let categoryAmounts: { [key: string]: number } = {};

                    // Define colors for different categories
                    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];

                    // Process data
                    Object.keys(data).forEach((key) => {
                        const item = data[key];
                        if (item.amount && item.category) {
                            const amount = parseFloat(item.amount);
                            const category = item.category;

                            if (!isNaN(amount)) {
                                // Sum up values within each category
                                if (categoryAmounts[category]) {
                                    categoryAmounts[category] += amount;
                                } else {
                                    categoryAmounts[category] = amount;
                                }
                            }
                        }
                    });

                    // Convert object to array for Pie Chart
                    const pieData = Object.keys(categoryAmounts).map((category, index) => ({
                        name: category,
                        amount: categoryAmounts[category],
                        color: colors[index % colors.length], // Cycle through colors
                        legendFontColor: "#7F7F7F",
                        legendFontSize: 14,
                    }));

                    setChartData(pieData);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
       <View style={styles.container}>
            <Header leftIcon={appImages.backIcon} onLeftPress={() => goBack()} title="Graphical Representation" />
            
            <View style={styles.contentStyle}>
                {loading ? (
                    <ActivityIndicator size="large" color="#009688" />
                ) : (
                    chartData.length > 0 ? (
                        <View style={styles.chartContainer}>
                            <Text style={styles.title}>Category Wise Expenses</Text>
                            <PieChart
                                data={chartData}
                                width={screenWidth - 40}
                                height={220}
                                chartConfig={{
                                    backgroundGradientFrom: "#f3f3f3",
                                    backgroundGradientTo: "#ffffff",
                                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                }}
                                accessor={"amount"}
                                backgroundColor="transparent"
                                paddingLeft="15"
                                absolute
                            />
                        </View>
                    ) : (
                        <View style={styles.noDataContainer}>
                            <Text style={styles.noDataText}>No data found!</Text>
                        </View>
                    )
                )}
            </View>
        </View>);
};

export default RealtimeDatabasePieChart;
