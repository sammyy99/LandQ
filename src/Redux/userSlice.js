import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
  name:"user",
  initialState:"",
  reducers:{
    addUser : (state,action)=>{
         state = "sam"
    }
    }
  })

  export default userSlice.reducer;
  export const {addUser} = userSlice.actions;