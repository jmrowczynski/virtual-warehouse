import { ref } from 'vue';
import { AxiosResponse } from 'axios';

export interface IMutationOptions<TResponse = any, TError = unknown> {
    onSuccess?: (data: AxiosResponse<TResponse>) => void;
    onError?: (error: TError) => void;
}

const useMutation = <TData = any, TResponse = any, TError = unknown>(
    callback: (data: TData) => Promise<AxiosResponse<TResponse>>,
    options?: IMutationOptions<TResponse, TError>
) => {
    const isLoading = ref(false);
    const error = ref<unknown>(undefined);
    const response = ref<AxiosResponse<TResponse> | any>(undefined);

    const mutate = async (data: TData) => {
        isLoading.value = true;
        try {
            const result = await callback(data);
            response.value = result;
            if (options?.onSuccess) {
                options.onSuccess(result);
            }
        } catch (e) {
            error.value = e;
            if (options?.onError) {
                options.onError(e as TError);
            }
        } finally {
            isLoading.value = false;
        }
    };

    return { isLoading, error, data: response, mutate };
};

export default useMutation;
