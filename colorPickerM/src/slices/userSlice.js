import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    adSoyad : " "
}

const userSlice = createSlice ({
    name : "user",
    initialState,
    reducers : {
        setUser : (state , action) =>  {
            state.adSoyad = action.payload.adSoyad;
        },
    },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;