export const logout = () => {
    console.log("get out ")
    localStorage.clear()
    window.location.pathname = "/login"
}