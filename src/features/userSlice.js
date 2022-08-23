import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout:(state,{payload})=>{
      state.user=null
    }
  },
});

const { reducer, actions } = userSlice;
export const { login,logout } = actions;

export default reducer;
