import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfcakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfcakes--;
    },
    restocked: (state, action) => {
      state.noOfcakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const {ordered,restocked } = cakeSlice.actions;
