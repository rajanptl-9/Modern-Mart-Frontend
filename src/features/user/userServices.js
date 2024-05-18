import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const registerUser = async (user) => {
    const response = await axios.post(`${base_url}user/register`, user);
    return response.data;
}

const loginUser = async (user) => {
    const response = await axios.post(`${base_url}user/login`, user);
    return response.data;
}

const forgotPassword = async (email) => {
    const response = await axios.post(`${base_url}user/forgot-password-token`, email);
    return response.data;
}

const resetPassword = async (data) => {
    const response = await axios.put(`${base_url}user/reset-password/${data.token}`, data);
    return response.data;
}

const updateProfile = async (data) => {
    const response = await axios.put(`${base_url}user/update-profile`, data, config);
    return response.data;
}

const userServices = {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    updateProfile,
}

export default userServices;