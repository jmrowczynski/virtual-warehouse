import { axiosInstance } from '@/services/api/axios';
import {
    ICreateHandoverBody,
    IHandover,
    IHandoversResponse,
} from '@/services/api/types/handover';

class HandoversApi {
    static getAll(): Promise<IHandoversResponse> {
        return axiosInstance
            .get('/handovers')
            .then((response) => response.data);
    }

    static create(body: ICreateHandoverBody): Promise<IHandover> {
        return axiosInstance
            .post('/handovers', body)
            .then((response) => response.data);
    }
}

export default HandoversApi;
