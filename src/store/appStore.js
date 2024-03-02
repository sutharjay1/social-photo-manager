import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import userGalleryReducer from './userGallery.js';
import userRetrievedDataReducer from './userRetrievedData.js';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    userGallery: userGalleryReducer,
    userRetrievedData: userRetrievedDataReducer,
  },
});

export default appStore;
