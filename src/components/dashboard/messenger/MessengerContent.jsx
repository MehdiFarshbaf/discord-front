import {styled} from "@mui/material";
import {useEffect} from "react";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import {getDirectChatHistory} from "../../../realtime-communitaion/socketConnection";

const Wrapper = styled('div')({
    flexGrow: 1
})

const MessengerContent = ({chosenChatDetail}) => {

    useEffect(() => {
        getDirectChatHistory({
            receiverUserId: chosenChatDetail?.id
        })
    }, [chosenChatDetail]);
    return (
        <Wrapper>
            <Messages chosenChatDetail={chosenChatDetail}/>
            <NewMessageInput chosenChatDetail={chosenChatDetail}/>
        </Wrapper>
    )
}
export default MessengerContent