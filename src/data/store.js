import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import alertSlice from "./features/alertSlice";
import friendsSlice from "./features/friendsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice,
        friends: friendsSlice
    }
})


export default store