import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  level: 5,
  length: 5,
  tension: 3
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
      if (action.payload <= state.tension) {
        state.tension =  state.length - 1
      }
    },
    setTension: (state, action) => {
        state.tension = action.payload 
    } 
  
  },
});

export const { setLevel, setLength, setTension} = sapperSlice.actions;
export default sapperSlice.reducer;

