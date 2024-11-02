import {styled} from "@mui/material";
import FriendItem from "./FriendItem";
import {useSelector} from "react-redux";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

const FriendsList = () => {

    const {friends, onlineUsers} = useSelector(state => state.friends)

    const checkOnlineUsers = () => {
        const fs = friends.map(friend => {
            const isOnlineUser = onlineUsers.find(user => user.userId === friend.id)
            return {...friend, isOnline: !!isOnlineUser}
        })
        return fs
    }

    return (
        <MainContainer>
            {checkOnlineUsers().map(friend => (
                <FriendItem friend={friend}/>
            ))}
        </MainContainer>
    )
}
export default FriendsList