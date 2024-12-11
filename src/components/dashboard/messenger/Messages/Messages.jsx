import {styled} from "@mui/material";
import MessagesHeader from "./MessagesHeader";
import {dummyMessages} from "./dummyMessages";
import Message from "./Message";

const MainContainer = styled('div')({
    height: 'calc(100% - 60px)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const Messages = ({chosenChatDetail, messages}) => {
    return (
        <MainContainer>
            <MessagesHeader username={chosenChatDetail.username}/>
            {dummyMessages.map(message=>(
                <Message message={message} />
            ))}
        </MainContainer>
    )
}
export default Messages