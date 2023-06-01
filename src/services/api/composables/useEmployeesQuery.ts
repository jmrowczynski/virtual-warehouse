import { useQuery } from '@tanstack/vue-query';
import EmployeesApi from '@/services/api/connections/EmployeesApi';

export const EMPLOYEES_KEY = 'employees';

const useEmployeesQuery = () => {
    return useQuery([EMPLOYEES_KEY], () => EmployeesApi.getAll());
};

export default useEmployeesQuery;
