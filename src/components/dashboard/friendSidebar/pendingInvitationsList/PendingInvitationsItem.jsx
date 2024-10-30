import {useState} from "react";
import {Box, Tooltip, Typography} from "@mui/material";
import Avatar from "../../../Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import {useDispatch} from "react-redux";
import {acceptFriendInvitation, rejectFriendInvitation} from "../../../../data/features/friendsSlice";

const PendingInvitationsItem = ({invitation}) => {

    const [disable, setDisable] = useState(false)
    const dispatch = useDispatch()
    const handleAccept = () => {
        dispatch(acceptFriendInvitation(invitation._id))
        // setDisable(true)
    }
    const handleReject = () => {
        dispatch(rejectFriendInvitation(invitation._id))
        // setDisable(true)
    }
    return (
        <Tooltip title={invitation.senderUser.email}>
            <div style={{width: '100%'}}>
                <Box sx={{
                    width: '100%',
                    height: '42px',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Avatar username={invitation.senderUser.username}/>
                    <Typography sx={{
                        marginLeft: '7px',
                        fontWeight: 700,
                        color: '#8e9291',
                        flexGrow: 1
                    }} variant='subtitle1'>{invitation.senderUser.username}</Typography>
                    <InvitationDecisionButtons disable={disable} acceptFriendInvitation={handleAccept}
                                               rejectFriendInvitation={handleReject}/>
                </Box>
            </div>
        </Tooltip>
    )
}
export default PendingInvitationsItem