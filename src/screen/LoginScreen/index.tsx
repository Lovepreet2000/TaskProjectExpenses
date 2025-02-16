import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { addToDatabase, alreadyExistsInDatabase } from '../../utils/databaseFun';
import { popTypes, ShowAlertMessage } from '../../utils/showAlerMessage';
import { useDispatch } from 'react-redux';
import { setProfileData } from '../../redux/slices/userSlice';
import { routeConstants } from '../../utils/constants';
import { navigate } from '../../helper/navigationServices';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure();
  });

  const _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      return true;
    } catch (error) {
      return true;
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      _signOut();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo?.data?.user, 'success fully');
     
      const suid = userInfo?.data?.user?.id;
      const payload = {
        name: userInfo?.data?.user?.name,
        suid: suid,
        givenName: userInfo?.data?.user?.email.split('@')[0],
        loginType: 'google',
      }
       dispatch(setProfileData(payload));
      const isExist = await alreadyExistsInDatabase(suid);
      if (!isExist) {
        await addToDatabase(`${suid}/userInfo`, payload); 
        
      } 

     navigate(routeConstants.mainScreen);

    } catch (error) {
      _signOut();
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Some other error happened');
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
   <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default LoginScreen;
