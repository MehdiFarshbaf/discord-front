import {styled} from "@mui/material";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import FriendSidebar from "../../components/dashboard/friendSidebar/FriendSidebar";
import Messenger from "../../components/dashboard/messenger/Messenger";
import AppBar from "../../components/dashboard/appBar/AppBar";
import {useEffect} from "react";
import {logout} from "../../utils/auth";
import {useDispatch} from "react-redux";
import {setUserDetails} from "../../data/features/authSlice";
import {connectWithSocketServer} from "../../realtime-communitaion/socketConnection";

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
})

const Dashboard = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const userDetails = localStorage.getItem('user')

        if (!userDetails) {
            logout()
        } else {
            dispatch(setUserDetails(JSON.parse(userDetails)))
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, [dispatch]);

    return (
        <Wrapper>
            <Sidebar/>
            <FriendSidebar/>
            <Messenger/>
            <AppBar/>
        </Wrapper>
    )
}
export default Dashboard