import axios from 'axios';

const config = {
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: { Accept: 'application/json' },
    withCredentials: true,
};

export const axiosInstance = axios.create(config);
