import { createSlice } from '@reduxjs/toolkit';

const userGallerySlice = createSlice({
  name: 'userGallery',
  initialState: {
    imageURLs: [],
    publicID: [],
    originalName: [],
    createdAt: [],
  },
  reducers: {
    addUserImages(state, action) {
      const { imageURLs, publicID, originalName, createdAt } = action.payload;
      return {
        ...state,
        imageURLs: [...state.imageURLs, imageURLs],
        publicID: [...state.publicID, publicID],
        originalName: [...state.originalName, originalName],
        createdAt: [...state.createdAt, createdAt],
      };
    },
  },
});

export const { addUserImages } = userGallerySlice.actions;
export default userGallerySlice.reducer;
