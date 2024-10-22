import axios from "axios";
import {logout} from "./auth";

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 1000 //1s
})

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem("user")
    if (userDetails) {
        const token = JSON.parse(userDetails).token
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

export const login = async (data) => {
    try {
        const res = await apiClient.post('/auth/login', data)
        return res.data
    } catch (err) {
        return err?.response?.data
    }
}
export const register = async (data) => {
    try {
        const {data: res} = await apiClient.post('/auth/register', data)
        return res
    } catch (err) {
        return err?.response?.data
    }
}

export const sendFriendInvitation = async (data) => {
    try {
        const {data: res} = await apiClient.post('/friend-invitation/invite', data)
        return res
    } catch (err) {
        return err?.response?.data
    }
}
// secure routes
const checkResponseCode = exception => {
    const responseCode = exception?.response?.status
    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout()
    }
}