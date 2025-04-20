import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    boxProps : [],
    boxWidth40props : [],
    boxHeight40props: []
}

const boxSlice = createSlice ({
    name : "box",
    initialState,
    reducers : {
        setBox : (state, action) => {
            state.boxProps = action.payload;
        },
        setWidth40Beig : (state , action) => {
            state.boxProps = action.payload;
        },
        setHeight40Beige : (state , action) => {
            state.boxProps  = action.payload;
        },

    },

});

export const {setBox, setHeight40Beige, setWidth40Beig} = boxSlice.actions;
export default boxSlice.reducer;