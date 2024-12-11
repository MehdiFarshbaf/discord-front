import {Typography} from "@mui/material";
import {useSelector} from "react-redux";

const ChosenChatDetails=()=>{

    const chatDetail = useSelector(state => state.chat.chosenChatDetails)
    return(
        <Typography sx={{fontSize:'16px',color:'white',fontWeight:'bold',fontFamily:'monospace'}}>
            {chatDetail ? `Chosen Conversation : ${chatDetail?.username}`:""}
        </Typography>
    )
}
export default ChosenChatDetails