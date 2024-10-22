import {styled} from "@mui/material";
import PendingInvitationsItem from "./PendingInvitationsItem";

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
})

const invitationList = [
    {_id: 0, serderId: {username: 'ahmad', email: 'admad@gmail.com'}},
    {_id: 1, serderId: {username: 'hadi', email: 'hadi@gmail.com'}},
]

const PendingInvitationsList = () => {
    return (
        <MainContainer>
            {invitationList.map(user => (
                <PendingInvitationsItem user={user}/>
            ))}
        </MainContainer>
    )
}
export default PendingInvitationsList