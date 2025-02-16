import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from '../screen/tasksList';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../helper/navigationServices';

import {routeConstants} from '../utils/constants';
import AddExpenses from '../screen/addExpense';
import LineChartScreen from '../screen/GraphicRepresetation';
import LoginScreen from '../screen/LoginScreen';
import MainScreen from '../screen/mainScreen';
import CategoryWithBudget from '../screen/categoryWithBudget';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();

const Route = () => {
  const {profileData} = useSelector(data => data.user);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={
          profileData ? routeConstants.mainScreen : routeConstants.login
        }
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routeConstants.login} component={LoginScreen} />
        <Stack.Screen name={routeConstants.mainScreen} component={MainScreen} />
        <Stack.Screen
          name={routeConstants.editCatergoriesBudget}
          component={CategoryWithBudget}
        />
        <Stack.Screen
          name={routeConstants.representation}
          component={LineChartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
