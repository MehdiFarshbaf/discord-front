import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";
import CustomPrimaryButton from "../CustomPrimaryButton";
import RedirectInfo from "../RedirectInfo";

const RegisterFooter = ({handleRegister, isFormValid}) => {
    const navigate = useNavigate()
    const handlePushToLogin = () => {
        navigate('/login')
    }

    const getFormNotValidMessage = () => {
        return 'User name should contains between 6 and 12 characters and password should contains between 6 and 12 characters. Also correct email address should provided'
    }
    const getFormValidMessage = () => {
        return 'Press to Register!'
    }

    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div><CustomPrimaryButton label="Register" additionalStyle={{marginTop: '30px'}} disable={!isFormValid}
                                          onClick={handleRegister}/></div>
            </Tooltip>
            <RedirectInfo text="" redirectText="Already have an account" additionalStyles={{marginTop: '5px'}}
                          redirectHandler={handlePushToLogin}/>
        </>
    )
}
export default RegisterFooter