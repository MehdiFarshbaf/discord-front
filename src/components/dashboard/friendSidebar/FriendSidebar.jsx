import {styled} from "@mui/material";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./friendsList/FriendsList";
import PendingInvitationsList from "./pendingInvitationsList/PendingInvitationsList";

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2F3136'
})

const FriendSidebar = () => {
    return (
        <MainContainer>
            <AddFriendButton/>
            <FriendsTitle title="Private Message"/>
            <FriendsList/>
            <FriendsTitle title="Invitaions"/>
            <PendingInvitationsList/>
        </MainContainer>
    )
}
export default FriendSidebar