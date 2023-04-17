import { defineStore } from 'pinia';
import { IProductsParams } from '@/services/api/types/product';

export const userProductsStore = defineStore('products', {
    state: (): IProductsParams => {
        return {
            page: 1,
            name: '',
            price_min: undefined,
            price_max: undefined,
            order_by: 'name',
        };
    },
    actions: {
        setPage(page: number) {
            this.page = page;
        },
        setName(name: IProductsParams['name']) {
            this.name = name;
        },
        setPriceMin(priceMin: IProductsParams['price_min']) {
            this.price_min = priceMin;
        },
        setPriceMax(priceMax: IProductsParams['price_max']) {
            this.price_max = priceMax;
        },
        setOrderBy(orderBy: IProductsParams['order_by']) {
            this.order_by = orderBy;
        },
    },
});
