import { useQuery } from '@tanstack/vue-query';
import AuthApi from '@/services/api/connections/AuthApi';

export const USER_KEY = 'user';

const useUserQuery = () => {
    return useQuery([USER_KEY], AuthApi.user);
};

export default useUserQuery;
