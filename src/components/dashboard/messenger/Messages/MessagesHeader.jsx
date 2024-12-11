import {styled, Typography} from "@mui/material";
import Avatar from "../../../Avatar";

const MainContainer = styled('div')({
    width: '98%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px'
})

const MessagesHeader = ({username = ""}) => {
    return (
        <MainContainer>
            <Avatar large username={username}/>
            <Typography variant='h4' sx={{
                fontWeight: 'bold',
                color: 'white',
                marginLeft: '5px',
                marginRight: '5px'
            }}>{username}</Typography>
            <Typography sx={{color:'#b9bbbe',marginLeft:'5px',marginRight:'5px'}}>This is beginning of your conversation with {username}</Typography>
        </MainContainer>
    )
}
export default MessagesHeader