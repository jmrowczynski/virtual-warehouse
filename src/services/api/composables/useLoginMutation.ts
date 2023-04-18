import AuthApi from '@/services/api/connections/AuthApi';
import {
    IUserLoginRequest,
    IUserLoginResponse,
} from '@/services/api/types/user';
import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/vue-query';
import { useAuthStore } from '@/stores/useAuthStore';

const useLoginMutation = (
    options?: UseMutationOptions<
        IUserLoginResponse,
        unknown,
        IUserLoginRequest,
        unknown
    >
) => {
    const queryClient = useQueryClient();
    const authStore = useAuthStore();
    return useMutation({
        onSuccess(data) {
            authStore.setUser(data.user);
            queryClient.setQueryData(['user'], data.user);
        },
        mutationFn: (body) => AuthApi.login(body),
        ...options,
    });
};

export default useLoginMutation;
