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
            dispatch(openAlertMessage(response.message))
        } else {
            dispatch(openAlertMessage(response.message))
            closeDialogHandler()
        }
    }
}

export const acceptFriendInvitation = (id) => {
    return async (dispatch) => {
        const response = await api.acceptFriend(id)
        if (response.success === false) {
            dispatch(openAlertMessage(response.message))
        } else {
            dispatch(openAlertMessage("Invitation accepted"))
        }
    }
}
export const rejectFriendInvitation = (id) => {
    return async (dispatch) => {
        const response = await api.rejectFriend(id)
        if (response.success === false) {
            dispatch(openAlertMessage(response.message))
        } else {
            dispatch(openAlertMessage("Invitation rejected"))
        }
    }
}
export default friendsSlice.reducer

export const {setPendingFriendsInvitations,setFriends,setOnlineUsers} = friendsSlice.actions