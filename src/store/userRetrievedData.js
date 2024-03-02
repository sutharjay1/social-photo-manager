import { createSlice } from '@reduxjs/toolkit';

const userRetrievedDataSlice = createSlice({
  name: 'userRetrievedData',
  initialState: {
    imageURLs: [],
    imageID: [],
  },
  reducers: {
    getDataOfUser(state, action) {
      const { imageURLs, publicID, originalName, createdAt, imageID } =
        action.payload;
      return {
        ...state,
        imageURLs: [...state.imageURLs, ...imageURLs],
        imageID: [...state.imageID, ...imageID],
      };
    },
  },
});

export const { getDataOfUser } = userRetrievedDataSlice.actions;
export default userRetrievedDataSlice.reducer;
