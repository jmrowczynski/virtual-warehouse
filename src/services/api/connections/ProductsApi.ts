import { axiosInstance } from '@/services/api/axios';
import {
    IProductsParams,
    IProductsResponse,
} from '@/services/api/types/product';

class ProductsApi {
    static getAll(params?: IProductsParams): Promise<IProductsResponse> {
        return axiosInstance
            .get('/products', { params })
            .then((response) => response.data);
    }
}

export default ProductsApi;
