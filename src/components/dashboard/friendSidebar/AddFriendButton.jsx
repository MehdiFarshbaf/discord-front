import CustomPrimaryButton from "../../CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";
import {useState} from "react";

const additionalStyle = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '80%',
    height: '30px',
    background: '#3ba55d'
}

const AddFriendButton = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpenAddFriend = () => setIsDialogOpen(true)
    const handleCloseAddFriend = () => setIsDialogOpen(false)

    return (
        <>
            <CustomPrimaryButton label='Add Friend' onClick={() => handleOpenAddFriend()}
                                 additionalStyle={additionalStyle}/>
            <AddFriendDialog isDialogOpen={isDialogOpen} closeDialogHandle={() => handleCloseAddFriend()}/>
        </>
    )
}
export default AddFriendButton