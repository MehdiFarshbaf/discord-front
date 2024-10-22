import AuthBox from "../../../components/AuthBox";
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import RegisterInputs from "../../../components/auth/RegisterInputs";
import RegisterFooter from "../../../components/auth/RegisterFooter";
import {validateRegisterForm} from "../../../utils/validator";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../../data/features/authSlice";

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = () => {
        const userDetails = {
            email, username, password
        }
        dispatch(registerUser(userDetails, navigate))
    }

    useEffect(() => {
        setIsFormValid(validateRegisterForm({email, username, password}))
    }, [email, password, username, setIsFormValid]);

    return (
        <AuthBox>
            <Typography variant="h5" sx={{color: 'white'}}>Create an account</Typography>
            <RegisterInputs setPassword={setPassword} password={password} setUsername={setUsername} email={email}
                            setEmail={setEmail} username={username}/>
            <RegisterFooter isFormValid={isFormValid} handleRegister={handleRegister}/>
        </AuthBox>
    )
}
export default Register