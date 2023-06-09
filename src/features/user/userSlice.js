import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  errors: "",
};
//generated pending fullfilled rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.users = action.payload),
        (state.errors = "");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.errors = action.error.message);
    });
  },
});

export default userSlice.reducer;

