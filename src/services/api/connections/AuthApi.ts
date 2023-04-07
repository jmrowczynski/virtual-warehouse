import { IUserLoginRequest, IUserLoginResponse } from '@/services/api/types';
import { axiosInstance } from '@/services/api/axios';

class AuthApi {
    static login(body: IUserLoginRequest) {
        return axiosInstance.post<IUserLoginResponse>('/auth/login', body);
    }

    static cookie() {
        return axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: import.meta.env.VITE_APP_API_URL.replace('/api', ''),
        });
    }

    static logout() {
        return axiosInstance.post('/logout');
    }
}

export default AuthApi;
