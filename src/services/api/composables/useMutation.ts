import { ref } from 'vue';

export interface IMutationOptions<TData = any, TError = unknown> {
    onSuccess?: (data: TData) => void;
    onError?: (error: TError) => void;
}

const useMutation = <TData = any, TResponse = any>(
    callback: (data: TData) => Promise<TResponse>,
    options?: IMutationOptions<TResponse>
) => {
    const isLoading = ref(false);
    const error = ref<unknown>(undefined);
    const response = ref<TResponse | any>(undefined);

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
                options.onError(e);
            }
        } finally {
            isLoading.value = false;
        }
    };

    return { isLoading, error, data: response, mutate };
};

export default useMutation;
