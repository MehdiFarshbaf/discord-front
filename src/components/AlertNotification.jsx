import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeAlertMessage} from "../data/features/alertSlice";

const AlertNotification = () => {

    const {showAlertMessage, alertMessageContent} = useSelector(state => state.alert)
    const dispatch = useDispatch()

    return (
        <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                  open={showAlertMessage}
                  onClose={() => {
                      dispatch(closeAlertMessage())
                  }} autoHideDuration={6000}>
            <Alert severity="info">{alertMessageContent}</Alert>
        </Snackbar>
    )
}
export default AlertNotification