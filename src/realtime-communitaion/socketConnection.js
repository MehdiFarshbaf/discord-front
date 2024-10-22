import io from "socket.io-client";
import store from './../data/store';
import { setPendingFriendsInvitations } from "../data/features/friendsSlice";

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

        socket.on("friend-invitations",(data)=>{
            console.log("enter")
            const {pendingInvitations} = data

            console.log(pendingInvitations)
            store.dispatch(setPendingFriendsInvitations(pendingInvitations))
        })
    })
}