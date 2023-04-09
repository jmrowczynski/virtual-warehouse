import AuthApi from '@/services/api/connections/AuthApi';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { useAuthStore } from '@/stores/useAuthStore';

const useLogoutMutation = () => {
    const queryClient = useQueryClient();
    const authStore = useAuthStore();
    return useMutation({
        onSuccess() {
            authStore.removeUser();
            queryClient.removeQueries(['user']);
        },
        mutationFn: () => AuthApi.logout(),
    });
};

export default useLogoutMutation;
