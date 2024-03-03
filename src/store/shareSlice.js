import { createSlice } from '@reduxjs/toolkit';

const shareSlice = createSlice({
  name: 'shareSlice',
  initialState: {
    imageURLs: [],
    imageID: [],
    publicID: [],
    originalName: [],
    photoURLs: '',
  },
  reducers: {
    getDataByShare(state, action) {
      const { imageURLs, publicID, originalName, imageID, photoURLs } =
        action.payload;
      return {
        ...state,
        imageURLs: [...state.imageURLs, ...imageURLs],
        imageID: [...state.imageID, ...imageID],
        publicID: [...state.publicID, ...publicID],
        originalName: [...state.originalName, ...originalName],
        photoURLs: photoURLs,
      };
    },
  },
});

export const { getDataByShare } = shareSlice.actions;
export default shareSlice.reducer;
