import {styled} from "@mui/material";
import {useState} from "react";
import {sendDirectMessage} from "../../../realtime-communitaion/socketConnection";
import messages from "./Messages/Messages";

const MainContainer = styled("div")({
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const Input = styled("input")({
    background: "#2f3136",
    width: "98%",
    height: "44px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "monospace",
    padding: "0 10px"
})

const NewMessageInput = ({chosenChatDetail}) => {
    const [message, setMessage] = useState("")

    const handleMessageValueChange = (event) => {
        setMessage(event.target.value)
    }
    const handleSendMessage = () => {
        console.log("sending message to server")
        if (message.length > 0) {
            sendDirectMessage({
                receiverUserId: chosenChatDetail?.id,
                content: message
            })
            setMessage("")
        }

    }
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSendMessage()
        }
    }
    return (
        <MainContainer>
            <Input placeholder={`write message to ${chosenChatDetail?.name}`}
                   value={message}
                   onChange={handleMessageValueChange}
                   onKeyDown={handleKeyPress}
            />
        </MainContainer>
    )
}
export default NewMessageInput