import { useQuery } from '@tanstack/vue-query';
import AuthApi from '@/services/api/connections/AuthApi';

const useUserQuery = () => {
    return useQuery(['user'], AuthApi.user);
};

export default useUserQuery;
