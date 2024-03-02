import { createSlice } from '@reduxjs/toolkit';

const userRetrievedDataSlice = createSlice({
  name: 'userRetrievedData',
  initialState: {
    imageURLs: [],
    publicID: [],
    originalName: [],
    createdAt: [],
    imageID: [],
  },
  reducers: {
    getDataOfUser(state, action) {
      const { imageURLs, publicID, originalName, createdAt, imageID } = action.payload;
      return {
        ...state,
        imageURLs: [...state.imageURLs, ...imageURLs],
        publicID: [...state.publicID, ...publicID],
        originalName: [...state.originalName, ...originalName],
        createdAt: [...state.createdAt, ...createdAt],
        imageID: [...state.imageID, ...imageID],
      };
    },
  },
});

export const { getDataOfUser } = userRetrievedDataSlice.actions;
export default userRetrievedDataSlice.reducer;
