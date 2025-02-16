import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileData: null,
  categories: [],
  totalBudget: 0,
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      // state.profileData = action.payload;
      state.profileData = action.payload;
    },
    resetUserSlice: (state, action) => {
      state.profileData = {};
    },
    setNewCategorySlice: (state, action) => {
      state.categories = action.payload;
    },
    removeCategorySlice: (state, action) => {
      state.categories.splice(action.index, 1);
    },
    setTotalBudgetSlice: (state, action) => {
      state.totalBudget = action?.payload;
    },
    setUserInfoSlice: (state, action) => {
      state.categories = action.payload.categories;
      state.profileData = action.payload.profileData;
      state.totalBudget = action.payload.totalBudget;
    },
    resetReducerSlice: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setProfileData,
  resetUserSlice,
  setNewCategorySlice,
  removeCategorySlice,
  setUserInfoSlice,
  setTotalBudgetSlice,
  resetReducerSlice,
} = userSlice.actions;

export default userSlice.reducer;
