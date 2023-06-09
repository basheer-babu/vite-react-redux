import {createSlice} from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice';


const initialState = {
  noOficeCreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOficeCreams--;
    },
    restocked: (state, actions) => {
      state.noOficeCreams += actions.payload;
    },
  },
 /* when you cakeorderd icecream (free both function)
  extraReducers:{
    ['cake/ordered']:(state)=>{
        state.noOficeCreams--
    }
  }*/
// or this code is best practice

// extraReducers:(builder)=>{
//     builder.addCase(cakeOrdered,(state)=>{
//         state.noOficeCreams--
//     })
// }
});

export default icecreamSlice.reducer;
export const {ordered,restocked}= icecreamSlice.actions;
function newFunction() {
  return require("@reduxjs/toolkit").createSlice;
}

