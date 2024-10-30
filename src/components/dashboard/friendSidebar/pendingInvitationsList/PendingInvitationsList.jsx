import {styled} from "@mui/material";
import PendingInvitationsItem from "./PendingInvitationsItem";
import { useSelector } from "react-redux";

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
})


const PendingInvitationsList = () => {

    const {pendingFriendsInvitations} = useSelector(state=>state.friends)
    
    return (
        <MainContainer>
            {pendingFriendsInvitations.map(invitation => (
                <PendingInvitationsItem invitation={invitation}/>
            ))}
        </MainContainer>
    )
}
export default PendingInvitationsList