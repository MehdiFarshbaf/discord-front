import CustomPrimaryButton from "../CustomPrimaryButton";
import RedirectInfo from "../RedirectInfo";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

const LoginFooter = ({handleLogin, isFormValid}) => {
    const navigate = useNavigate()
    const handlePushToRegister = () => {
        navigate('/register')
    }

    const getFormNotValidMessage = () => {
        return 'Enter correct email address and password should contains between 6 and 12 characters'
    }
    const getFormValidMessage = () => {
        return 'Press to log in!'
    }

    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div><CustomPrimaryButton label="Log in" additionalStyle={{marginTop: '30px'}} disable={!isFormValid}
                                          onClick={handleLogin}/></div>
            </Tooltip>
            <RedirectInfo text="Need an account " redirectText="Create an account" additionalStyles={{marginTop: '5px'}}
                          redirectHandler={handlePushToRegister}/>
        </>
    )
}
export default LoginFooter