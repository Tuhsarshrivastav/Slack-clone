import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomid: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomid = action.payload.roomid;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomid;

export default appSlice.reducer;
