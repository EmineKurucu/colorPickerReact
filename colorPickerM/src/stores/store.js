import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import boxReducer from "../slices/boxSlice";

const store = configureStore ({
    reducer : {
        user : userReducer,
        box : boxReducer,
    },
});

export default store;