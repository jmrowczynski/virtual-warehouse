import {
    useMutation,
    UseMutationOptions,
    useQueryClient,
} from '@tanstack/vue-query';
import { PRODUCTS_KEY } from '@/services/api/composables/useProductsQuery';
import ProductsApi from '@/services/api/connections/ProductsApi';
import { IProduct } from '@/services/api/types/product';

const useProductDelete = (
    options?: UseMutationOptions<any, unknown, IProduct['id'], unknown>
) => {
    const queryClient = useQueryClient();
    return useMutation({
        async onSuccess() {
            await queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] });
        },
        mutationFn: (id: IProduct['id']) => ProductsApi.delete(id),
        ...options,
    });
};

export default useProductDelete;
