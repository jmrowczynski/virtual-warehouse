import { axiosInstance } from '@/services/api/axios';
import {
    ICreateProductBody,
    IProduct,
    IProductsParams,
    IProductsResponse,
    IUpdateProductBody,
} from '@/services/api/types/product';

class ProductsApi {
    static getAll(params?: IProductsParams): Promise<IProductsResponse> {
        return axiosInstance
            .get('/products', { params })
            .then((response) => response.data);
    }

    static get(id: IProduct['id']): Promise<IProduct> {
        return axiosInstance
            .get(`/products/${id}`)
            .then((response) => response.data);
    }

    static delete(id: IProduct['id']): Promise<any> {
        return axiosInstance
            .delete(`/products/${id}`)
            .then((response) => response.data);
    }

    static create(body: ICreateProductBody): Promise<IProduct> {
        return axiosInstance
            .post(`/products`, body)
            .then((response) => response.data);
    }

    static update(
        id: IProduct['id'],
        body: IUpdateProductBody
    ): Promise<IProduct> {
        return axiosInstance
            .put(`/products/${id}`, body)
            .then((response) => response.data);
    }
}

export default ProductsApi;
