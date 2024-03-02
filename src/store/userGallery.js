import { createSlice } from '@reduxjs/toolkit';

const userGallerySlice = createSlice({
  name: 'userGallery',
  initialState: {
    imageURLs: [],
    publicID: [],
    originalName: [],
    createdAt: [],
    imageID: [],
  },
  reducers: {
    addUserImages(state, action) {
      const { imageURLs, publicID, originalName, createdAt, imageID } =
        action.payload;
      return {
        ...state,
        imageURLs: [...state.imageURLs, imageURLs],
        publicID: [...state.publicID, publicID],
        originalName: [...state.originalName, originalName],
        createdAt: [...state.createdAt, createdAt],
      };
    },
    addImageID(state, action) {
      const { imageID } = action.payload;
      return {
        ...state,
        imageID: [...state.imageID, imageID],
      };
    },
  },
});

export const { addUserImages, addImageID } = userGallerySlice.actions;
export default userGallerySlice.reducer;
