import { useQuery } from '@tanstack/vue-query';
import ProductsApi from '@/services/api/connections/ProductsApi';
import { IProduct } from '@/services/api/types/product';

export const PRODUCT_KEY = 'product';

const useProductQuery = (id: IProduct['id']) => {
    return useQuery([PRODUCT_KEY, id], () => ProductsApi.get(id));
};

export default useProductQuery;
