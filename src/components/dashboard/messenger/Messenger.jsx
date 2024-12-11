import {styled} from "@mui/material";
import {useSelector} from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled('div')({
    flexGrow:1,
    backgroundColor:'#36393f',
    marginTop:'48px',
    display:'flex'
})

const Messenger=()=>{

    const chatDetail = useSelector(state => state.chat.chosenChatDetails)


    return(
        <MainContainer>
            {!chatDetail ? <WelcomeMessage/> : <MessengerContent chosenChatDetail={chatDetail}/>}
        </MainContainer>
    )
}
export default Messenger