import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/vue-query';
import { PRODUCTS_KEY } from '@/services/api/composables/useProductsQuery';
import { ICreateHandoverBody, IHandover } from '@/services/api/types/handover';
import HandoversApi from '@/services/api/connections/HandoversApi';
import { PRODUCT_KEY } from '@/services/api/composables/useProductQuery';

const useHandoverCreate = (
    options?: UseMutationOptions<
        IHandover,
        unknown,
        ICreateHandoverBody,
        unknown
    >
) => {
    const queryClient = useQueryClient();
    return useMutation({
        async onSuccess(data) {
            await queryClient.invalidateQueries([PRODUCTS_KEY]);
            await queryClient.invalidateQueries([PRODUCT_KEY, data.product_id]);
        },
        mutationFn: (body) => HandoversApi.create(body),
        ...options,
    });
};

export default useHandoverCreate;
