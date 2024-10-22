import {Box, IconButton} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear'

const InvitationDecisionButtons = ({disable, acceptFriendInvitation, rejectFriendInvitation}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <IconButton style={{color: 'white'}} disabled={disable} onClick={acceptFriendInvitation}>
                <CheckIcon/>
            </IconButton>
            <IconButton style={{color: 'white'}} disabled={disable} onClick={rejectFriendInvitation}>
                <ClearIcon/>
            </IconButton>
        </Box>
    )
}
export default InvitationDecisionButtons
