import AuthBox from "../../../components/AuthBox";
import LoginHeader from "../../../components/auth/LoginHeader";
import LoginPageInput from "../../../components/auth/LoginPageInput";
import {useEffect, useState} from "react";
import LoginFooter from "../../../components/auth/LoginFooter";
import {validateLoginForm} from "../../../utils/validator";
import {useDispatch} from "react-redux";
import {loginUser} from "../../../data/features/authSlice";
import {useNavigate} from "react-router-dom";
import AlertNotification from "../../../components/AlertNotification";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = () => {
        const userDetails = {email, password}
        dispatch(loginUser(userDetails, navigate))
    }

    useEffect(() => {
        setIsFormValid(validateLoginForm({email, password}))
    }, [password, email, setIsFormValid]);


    return (
        <AuthBox>
            <LoginHeader/>
            <LoginPageInput setEmail={setEmail} email={email} password={password} setPassword={setPassword}/>
            <LoginFooter handleLogin={handleLogin} isFormValid={isFormValid}/>
            <AlertNotification/>
            
        </AuthBox>
    )
}
export default Login