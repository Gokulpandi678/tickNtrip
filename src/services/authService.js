import apiClient from "../api/axiosClient"
import { API_ENDPOINTS } from "../api/endpoint"

export const authService = {
    getAllUser : async() => {
        const { data } = await apiClient.get(API_ENDPOINTS.GETALLUSER);
        return data;
    },

    getUserById : async(id) => {
        const { data } = await apiClient.get(API_ENDPOINTS.GETUSERBYID(id));
        return data;
    },

    createUser : async(user) => {
        const { data } = await apiClient.post(API_ENDPOINTS.REGISTER, user);
        return data;
    }
}