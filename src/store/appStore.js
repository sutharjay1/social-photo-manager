import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import userGalleryReducer from './userGallery.js';
import userRetrievedDataReducer from './userRetrievedData.js';
import shareSliceReducer from './shareSlice.js';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    userGallery: userGalleryReducer,
    userRetrievedData: userRetrievedDataReducer,
    shareLink: shareSliceReducer,
  },
});

export default appStore;
