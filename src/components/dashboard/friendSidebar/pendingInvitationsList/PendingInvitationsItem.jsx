import {useState} from "react";
import {Box, Tooltip, Typography} from "@mui/material";
import Avatar from "../../../Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

const PendingInvitationsItem = ({
                                    user, acceptFriendInvitation = () => {
    }
                                }, rejectFriendInvitation = () => {
}) => {

    const [disable, setDisable] = useState(false)
    const handleAccept = () => {
        acceptFriendInvitation(user._id)
        setDisable(true)
    }
    const handleReject = () => {
        rejectFriendInvitation(user._id)
        setDisable(true)
    }
    return (
        <Tooltip title={user.serderId.email}>
            <div style={{width: '100%'}}>
                <Box sx={{
                    width: '100%',
                    height: '42px',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Avatar username={user.serderId.username}/>
                    <Typography sx={{
                        marginLeft: '7px',
                        fontWeight: 700,
                        color: '#8e9291',
                        flexGrow: 1
                    }} variant='subtitle1'>{user.serderId.username}</Typography>
                    <InvitationDecisionButtons disable={disable} acceptFriendInvitation={handleAccept}
                                               rejectFriendInvitation={handleReject}/>
                </Box>
            </div>
        </Tooltip>
    )
}
export default PendingInvitationsItem