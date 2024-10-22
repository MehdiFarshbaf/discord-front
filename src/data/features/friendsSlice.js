import {createSlice} from "@reduxjs/toolkit";
import * as api from '../../utils/api'
import {openAlertMessage} from "./alertSlice";

const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [],
        pendingFriendsInvitations: [],
        onlineUsers: []
    },
    reducers: {
        setFriends: (state, action) => {
            state.friends = action.payload
        },
        setPendingFriendsInvitations: (state, action) => {
            state.pendingFriendsInvitations = action.payload
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload
        }
    }
})

export const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendFriendInvitation(data)

        if (response.success === false) {
            console.log("false",response)
            dispatch(openAlertMessage(response.message))
        } else {
            console.log("true",response)
            dispatch(openAlertMessage(response.message))
            closeDialogHandler()
        }
    }
}
export default friendsSlice.reducer

export const {setPendingFriendsInvitations} = friendsSlice.actions