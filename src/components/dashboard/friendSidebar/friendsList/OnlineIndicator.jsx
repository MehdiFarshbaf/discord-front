import {Box} from "@mui/material";
import {FiberManualRecord} from "@mui/icons-material";


const OnlineIndicator = () => {
return(
    <Box sx={{
        color:'#3ba55d',
        display:'flex',
        alignItems:'center',
        position:'absolute',
        right:0,
    }}>
        <FiberManualRecord  />
    </Box>
)
}
export default OnlineIndicator