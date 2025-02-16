import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
// import commentReducer from './commentSlice';
// import globalReducer from './globalSlice';
import persistReducer from 'redux-persist/es/persistReducer';
// import persistedReducer from './persistedSlice';
// import postReducer from './postSlice';
import userReducer from './userSlice';

const presistConfig = {
  key: 'persist',
  storage: AsyncStorage,
};

// Create a persisted reducer for the persist reducer
const persistValueReducer = persistReducer(presistConfig, userReducer);

export const rootReducer = combineReducers({
  user: persistValueReducer,
});
