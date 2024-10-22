import Input from "../inputs/Input";


const LoginPageInput = ({email, setEmail, password, setPassword}) => {
    return (
        <>
            <Input value={email} setValue={setEmail} label="E-mail" type="email" placeholder="Enter e-mail address"/>
            <Input value={password} setValue={setPassword} label="Password" type="password" placeholder="" />
        </>
    )
}
export default LoginPageInput