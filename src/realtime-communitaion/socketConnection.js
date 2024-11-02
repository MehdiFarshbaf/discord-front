import io from "socket.io-client";
import store from './../data/store';
import {setFriends, setOnlineUsers, setPendingFriendsInvitations} from "../data/features/friendsSlice";

let socket = null

export const connectWithSocketServer = (userDetails) => {

    const jwtToken = userDetails.token;

    socket = io("http://localhost:4000", {
        auth: {
            token: jwtToken,
            handshake: true
        }
    });

    socket.on("connect", () => {
        console.log('successfully connected with socket.io server')
        console.log(socket.id)

        socket.on("friend-invitations", (data) => {
            const {pendingInvitations} = data
            store.dispatch(setPendingFriendsInvitations(pendingInvitations))
        })

        socket.on("friends-list", (data) => {
            const {friends} = data
            store.dispatch(setFriends(friends))
        })

        socket.on("online-users", (data) => {
            const {onlineUsers} = data
            store.dispatch(setOnlineUsers(onlineUsers))
        })
    })
}