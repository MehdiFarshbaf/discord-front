import {Box, styled} from "@mui/material";

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2'
})
const AuthBox = ({children}) => {
    return (
        <BoxWrapper>
            <Box sx={{
                width: 700,
                height: 400,
                background: '#36393f',
                borderRadius: '5px',
                boxShadow: '0 2px 10px 0 rgb(0 0 0 /20%)',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px'
            }}>{children}</Box>
        </BoxWrapper>
    )
}
export default AuthBox