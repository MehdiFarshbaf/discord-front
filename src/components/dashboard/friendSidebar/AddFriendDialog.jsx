import {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import Input from "../../inputs/Input";
import {validateEmail} from "../../../utils/validator";
import CustomPrimaryButton from "../../CustomPrimaryButton";
import {useDispatch} from "react-redux";
import {sendFriendInvitation} from "../../../data/features/friendsSlice";

const AddFriendDialog = ({isDialogOpen, closeDialogHandle}) => {

    const [email, setEmail] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const dispatch = useDispatch()
  

    const handleCloseDialog = () => {
        closeDialogHandle()
        setEmail("")
    }

    const handleSendInvitation = () => {
        dispatch(sendFriendInvitation({targetEmailAddress:email}, handleCloseDialog))
    }

    useEffect(() => {
        setIsFormValid(validateEmail(email))
    }, [email, setIsFormValid]);

    return (
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle><Typography>Invite a Friend</Typography></DialogTitle>
            <DialogContent>
                <DialogContentText><Typography>Enter email address of friend which you would like to invite</Typography></DialogContentText>
                <Input type="email" label="email" value={email} setValue={setEmail} placeholder="Enter mail address"/>
            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton onClick={handleSendInvitation} disable={!isFormValid} label="Send"
                                     additionalStyle={{
                                         marginLeft: '15px',
                                         marginRight: '15px',
                                         marginBottom: '10px'
                                     }}/>
            </DialogActions>
        </Dialog>
    )
}
export default AddFriendDialog