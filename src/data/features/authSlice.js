import {createSlice} from "@reduxjs/toolkit";
import * as api from '../../utils/api'
import {openAlertMessage} from "./alertSlice";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userDetails: null
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload
        },
        dec: state => {
            state.value -= 1
        }
    }
})

export const loginUser = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.login(userDetails)

        if (response.success === false) {
            dispatch(openAlertMessage(response.message))
        } else {
            const {user} = response
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({type: 'auth/setUserDetails', payload: {userDetails}})
            navigate("/dashboard")
        }
    }
}
export const registerUser = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.register(userDetails)

        if (response.success === false) {
            dispatch(openAlertMessage(response.message))
        } else {
            const {user} = response
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({type: 'auth/setUserDetails', payload: {userDetails}})
            navigate("/dashboard")
        }
    }
}

export const {setUserDetails} = authSlice.actions

export default authSlice.reducer