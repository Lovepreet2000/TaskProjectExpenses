/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Route from './src/routes/routes';
import FlashMessage from 'react-native-flash-message';
import {firebase} from '@react-native-firebase/database';
import {getApp} from '@react-native-firebase/app';

import {useDispatch, useSelector} from 'react-redux';
import {getDataFromDatabase} from './src/utils/databaseFun';
import {setUserInfoSlice} from './src/redux/slices/userSlice';
import {getTotalBudget} from './src/helper/globalFunction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.initializeApp();
    checkFirebase();
  }, []);

  const {profileData} = useSelector(data => data.user);

  const checkFirebase = async () => {
    try {
      const app = getApp();
      await getData();
      console.log('🔥 Firebase Connected:', app.name);
    } catch (error) {
      console.error('❌ Firebase Not Connected:', error);
    }
  };

  const getData = async () => {
    try {
      const fetchedProfileData = await getDataFromDatabase(
        `${profileData.suid}`,
      );
      console.log(
        fetchedProfileData,
        fetchedProfileData.categories,
        fetchedProfileData.userInfo,
        'user info',
      );
      if (fetchedProfileData) {
        dispatch(
          setUserInfoSlice({
            categories: fetchedProfileData.categories,
            profileData: fetchedProfileData.userInfo,
            totalBudget: getTotalBudget(fetchedProfileData.categories),
          }),
        );
      }
    } catch (err) {
      console.log(err, 'err');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Route />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

export default App;
