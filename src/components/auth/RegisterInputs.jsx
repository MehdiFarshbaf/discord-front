import Input from "../inputs/Input";

const RegisterInputs = ({email, setEmail, password, setPassword, username, setUsername}) => {
    return (
        <>
            <Input value={email} setValue={setEmail} label="Email" type="text" placeholder="Enter email address"/>
            <Input value={username} setValue={setUsername} label="username" type="text" placeholder="Enter a username"/>
            <Input value={password} setValue={setPassword} label="Password" type="password"
                   placeholder="Enter password"/>
        </>
    )
}

export default RegisterInputs