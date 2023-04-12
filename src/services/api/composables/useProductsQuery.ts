import { useQuery } from '@tanstack/vue-query';
import ProductsApi from '@/services/api/connections/ProductsApi';
import { IProductsParams } from '@/services/api/types/product';

const useProductsQuery = (params?: IProductsParams) => {
    return useQuery(['products', params], () => ProductsApi.getAll(params));
};

export default useProductsQuery;
