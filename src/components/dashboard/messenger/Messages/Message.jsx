import {styled, Typography} from "@mui/material";
import Avatar from "../../../Avatar";

const MainContainer = styled("div")({
    width: "97%",
    display: "flex",
    marginTop: "10px",

})
const AvatarContainer = styled("div")({
    width: "70px"
})
const MessageContainer = styled("div")({
    display: "flex",
    flexDirection: "column",

})
const MessageContent = styled("div")({
    color: "#DCDDDE"
})
const SameAuthorMessageText = styled("span")({
    marginLeft: "70px"
})
const SameAuthorMessageContent = styled("div")({
    color: "#DCDDDE",
    width: "97%"
})
const Message = ({message}) => {

    const {content, sameAuthor, author, date, sameDay} = message

    if (sameAuthor && sameDay) {
        return (
            <SameAuthorMessageContent>
                <SameAuthorMessageText>{content}</SameAuthorMessageText>
            </SameAuthorMessageContent>
        )
    }

    return (
        <MainContainer>
            <AvatarContainer>
                <Avatar username={author.username}/>
            </AvatarContainer>
            <MessageContainer>
                <Typography style={{fontSize: "16px", color: "white", fontFamily: "monospace"}}>
                    {author.username}{" "}
                    <span style={{fontSize: "12px", color: "#72767d"}}>{date}</span>
                </Typography>
                <MessageContent>{content}</MessageContent>
            </MessageContainer>
        </MainContainer>
    )
}
export default Message