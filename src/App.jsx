import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import AlertNotification from "./components/AlertNotification";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to="/dashboard"/>} replace />
        </Routes>
    )
}
export default App