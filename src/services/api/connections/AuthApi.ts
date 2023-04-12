import {
    IUserLoginRequest,
    IUserLoginResponse,
} from '@/services/api/types/user';
import { axiosInstance } from '@/services/api/axios';

class AuthApi {
    static login(body: IUserLoginRequest): Promise<IUserLoginResponse> {
        return axiosInstance
            .post<IUserLoginResponse>('/auth/login', body)
            .then((response) => response.data);
    }

    static cookie() {
        return axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: import.meta.env.VITE_APP_API_URL.replace('/api', ''),
        });
    }

    static logout() {
        return axiosInstance
            .post('/auth/logout')
            .then((response) => response.data);
    }

    static user() {
        return axiosInstance.get('/user').then((response) => response.data);
    }
}

export default AuthApi;
