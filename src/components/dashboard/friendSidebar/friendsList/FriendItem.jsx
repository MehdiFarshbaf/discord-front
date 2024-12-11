import {Button, Typography} from "@mui/material";
import Avatar from "../../../Avatar";
import OnlineIndicator from "./OnlineIndicator";
import {useDispatch} from "react-redux";
import {setChosenChatDetails} from "../../../../data/features/chatSlice";

const FriendItem = ({friend}) => {

    const dispatch = useDispatch()
    const handleChooseActiveConversation = () => {
        dispatch(setChosenChatDetails({chatDetails: friend, chatType: 'DIRECT'}))
    }

    return (
        <Button key={friend._id} onClick={handleChooseActiveConversation} style={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textTransform: 'none',
            color: 'white',
            position: 'relative'
        }}>
            <Avatar username={friend.username}/>
            <Typography style={{marginLeft: '7px', fontWeight: 700, color: '#8e9297'}} variant='subtitle1'
                        align="left">{friend.username}</Typography>
            {friend.isOnline && <OnlineIndicator/>}
        </Button>
    )
}
export default FriendItem
