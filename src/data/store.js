import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import alertSlice from "./features/alertSlice";
import friendsSlice from "./features/friendsSlice";
import chatSlice from "./features/chatSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice,
        friends: friendsSlice,
        chat:chatSlice
    }
})


export default store