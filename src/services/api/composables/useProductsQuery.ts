import { useQuery } from '@tanstack/vue-query';
import ProductsApi from '@/services/api/connections/ProductsApi';
import { IProductsParams } from '@/services/api/types/product';

export const PRODUCTS_KEY = 'products';

const useProductsQuery = (params?: IProductsParams) => {
    return useQuery([PRODUCTS_KEY, params], () => ProductsApi.getAll(params));
};

export default useProductsQuery;
