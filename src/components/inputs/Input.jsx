import {styled} from "@mui/material";

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})
const Label = styled('p')({
    color: '#b9bbbe',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'monospace'
})
const InputComponent = styled('input')({
    flexFlow: 1,
    height: '40px',
    border: '1px solid black',
    borderRadius: '5px',
    color: '#dcddde',
    background: '#35393f',
    margin: 0,
    fontSize: '16px',
    padding: '0 5px'
})


const Input = ({value, setValue, label, type, placeholder}) => {

    const handleValueChange = (event) => {
        setValue(event.target.value)
    }


    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputComponent value={value} onChange={handleValueChange} type={type}
                            placeholder={placeholder}></InputComponent>
        </Wrapper>
    )
}
export default Input