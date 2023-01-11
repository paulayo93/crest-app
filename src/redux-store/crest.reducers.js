import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: "",
};

const crestReducers = createSlice({
  name: "product",
  initialState,
  reducers: {
    login: (state, { payload: {isLoggedIn} }) => {

        if(!isLoggedIn)
        state.isLoggedIn = true
      },
  }
});

export const { login } = crestReducers.actions;
export default crestReducers.reducer;
