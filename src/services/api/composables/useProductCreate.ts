import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/vue-query';
import { PRODUCTS_KEY } from '@/services/api/composables/useProductsQuery';
import ProductsApi from '@/services/api/connections/ProductsApi';
import { ICreateProductBody, IProduct } from '@/services/api/types/product';

const useLoginMutation = (
    options?: UseMutationOptions<IProduct, unknown, ICreateProductBody, unknown>
) => {
    const queryClient = useQueryClient();
    return useMutation({
        async onSuccess() {
            await queryClient.invalidateQueries([PRODUCTS_KEY]);
        },
        mutationFn: (body) => ProductsApi.create(body),
        ...options,
    });
};

export default useLoginMutation;
