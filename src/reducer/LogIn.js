import { createSlice } from "@reduxjs/toolkit";
const intialLogState = { flag: false };
const LogIn = createSlice({
  name: "LogIn",
  initialState: intialLogState,
  reducers: {
    logIn(state) {
      state.flag = !state.flag;
    },
  },
});
const LogInActions = LogIn.actions;
export {LogIn,LogInActions}  ;