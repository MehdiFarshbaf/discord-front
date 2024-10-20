import {styled, Typography} from "@mui/material";

const RedirectText = styled('span')({
    color: '#00AFF4',
    fontWeight: '500',
    cursor: 'pointer'
})
const Redirect = ({text, redirectText, additionalStyles, redirectHandler}) => {
    return (
        <Typography sx={{color: '#72767d'}} variant="subtitle2"
                    style={additionalStyles ? additionalStyles : {}}>
            {text}
            <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
        </Typography>
    )
}
export default RedirectText