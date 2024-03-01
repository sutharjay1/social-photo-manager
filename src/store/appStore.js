import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import userGalleryReducer from './userGallery.js';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    userGallery: userGalleryReducer,
  },
});

export default appStore;
