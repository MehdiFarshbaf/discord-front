import {styled} from "@mui/material";
import FriendItem from "./FriendItem";
import {useSelector} from "react-redux";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

// const friends = [
//     {_id: 0, username: 'mehdi', isOnline: true},
//     {_id: 1, username: 'zahra', isOnline: false},
//     {_id: 2, username: 'samira', isOnline: false},
// ]

const FriendsList = () => {

    const {friends} = useSelector(state => state.friends)
    return (
        <MainContainer>
            {friends.map(friend => (
                <FriendItem friend={friend}/>
            ))}
        </MainContainer>
    )
}
export default FriendsList