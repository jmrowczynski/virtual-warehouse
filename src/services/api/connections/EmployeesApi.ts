import { axiosInstance } from '@/services/api/axios';
import { IEmployeesResponse } from '@/services/api/types/employee';

class EmployeesApi {
    static getAll(): Promise<IEmployeesResponse> {
        return axiosInstance
            .get('/employees')
            .then((response) => response.data);
    }
}

export default EmployeesApi;
