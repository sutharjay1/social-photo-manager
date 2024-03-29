import { createSlice } from '@reduxjs/toolkit';

const userRetrievedDataSlice = createSlice({
  name: 'userRetrievedData',
  initialState: {
    imageURLs: [],
    imageID: [],
    publicID: [],
    originalName: [],
    isDataRetrieved: false,
  },
  reducers: {
    getDataOfUser(state, action) {
      const { imageURLs, publicID, originalName, imageID } = action.payload;
      return {
        ...state,
        imageURLs: [...state.imageURLs, ...imageURLs],
        imageID: [...state.imageID, ...imageID],
        publicID: [...state.publicID, ...publicID],
        originalName: [...state.originalName, ...originalName],
      };
    },
    setIsDataRetrieved(state, action) {
      state.isDataRetrieved = true;
    },
  },
});

export const { getDataOfUser, setIsDataRetrieved } =
  userRetrievedDataSlice.actions;
export default userRetrievedDataSlice.reducer;
