import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginGoogleUser: {
      userName: null,
      userID: null,
      email: null,
      photoURL: null,
      isLogin: false,
    },
  },
  reducers: {
    loginGoogleUser: (state, action) => {
      state.loginGoogleUser = {
        ...state.loginGoogleUser,
        ...action.payload,
        isLogin: action.payload.isLogin,
      };
    },
  },
});

export const { loginGoogleUser } = userSlice.actions;

export default userSlice.reducer;
