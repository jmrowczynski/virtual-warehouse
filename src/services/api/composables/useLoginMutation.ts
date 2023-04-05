import useMutation, {
    IMutationOptions,
} from '@/services/api/composables/useMutation';
import AuthApi from '@/services/api/connections/AuthApi';
import { IUserLoginRequest, IUserLoginResponse } from '@/services/api/types';

const useLoginMutation = (options?: IMutationOptions<IUserLoginResponse>) => {
    return useMutation<IUserLoginRequest>(
        (body) => AuthApi.login(body),
        options
    );
};

export default useLoginMutation;
