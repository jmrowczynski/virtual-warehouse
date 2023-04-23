import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/vue-query';
import { PRODUCTS_KEY } from '@/services/api/composables/useProductsQuery';
import ProductsApi from '@/services/api/connections/ProductsApi';
import { IProduct, IUpdateProductBody } from '@/services/api/types/product';

const useLoginMutation = (
    options?: UseMutationOptions<
        IProduct,
        unknown,
        { id: IProduct['id']; body: IUpdateProductBody },
        unknown
    >
) => {
    const queryClient = useQueryClient();
    return useMutation({
        async onSuccess() {
            await queryClient.invalidateQueries([PRODUCTS_KEY]);
        },
        mutationFn: ({ id, body }) => ProductsApi.update(id, body),
        ...options,
    });
};

export default useLoginMutation;
