import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  level: 5,
  length: 5,
};

const sapperSlice = createSlice({
  name: "sapper",
  initialState,
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const { setLevel, setLength } = sapperSlice.actions;
export default sapperSlice.reducer;
