import axios from 'axios';
import AuthApi from '@/services/api/connections/AuthApi';

const config = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: { Accept: 'application/json' },
    withCredentials: true,
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        if (error.response.status === 419) {
            await AuthApi.cookie();

            return axiosInstance.request(error.config);
        }

        return Promise.reject(error);
    }
);
