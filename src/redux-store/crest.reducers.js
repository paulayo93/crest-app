import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: "",
};

const crestReducers = createSlice({
  name: "crest",
  initialState,
  reducers: {
    reset: () => console.log,
    login: (state, { payload: { isLoggedIn } }) => {
      
      if (!isLoggedIn) state.isLoggedIn = true;
    },
  },
});

export const { login } = crestReducers.actions;
export default crestReducers.reducer;
