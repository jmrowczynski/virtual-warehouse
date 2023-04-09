import AuthApi from '@/services/api/connections/AuthApi';
import { IUser, IUserLoginRequest } from '@/services/api/types';
import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/vue-query';
import { useAuthStore } from '@/stores/useAuthStore';

const useLoginMutation = (
    options?: UseMutationOptions<any, unknown, IUserLoginRequest, unknown>
) => {
    const queryClient = useQueryClient();
    const authStore = useAuthStore();
    return useMutation({
        ...options,
        onSuccess(data) {
            const user = data.data.user as IUser;
            authStore.setUser(user);
            queryClient.setQueryData(['user'], user);
        },
        mutationFn: (body) => AuthApi.login(body),
    });
};

export default useLoginMutation;
