export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12
}

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13
}
export const validateLoginForm = ({email, password}) => {
    const isMailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    return isMailValid && isPasswordValid
}

export const validateRegisterForm = ({email, username, password}) => {
    return validateEmail(email) && validatePassword(password) && validateUsername(username)
}