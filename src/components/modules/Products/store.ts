import { reactive } from 'vue';
import { IProduct } from '@/services/api/types/product';

interface Store {
    isCreateProductModalOpen: boolean;
    isRemoveProductModalOpen: boolean;
    activeProduct?: IProduct;
    openCreateProductModal: () => void;
    closeCreateProductModal: () => void;
    openRemoveProductModal: () => void;
    closeRemoveProductModal: () => void;
    setActiveProduct: (product: IProduct) => void;
}

export const store = reactive<Store>({
    isCreateProductModalOpen: false,
    isRemoveProductModalOpen: false,
    activeProduct: undefined,
    openCreateProductModal() {
        this.isCreateProductModalOpen = true;
    },
    closeCreateProductModal() {
        this.isCreateProductModalOpen = false;
    },
    openRemoveProductModal() {
        this.isRemoveProductModalOpen = true;
    },
    closeRemoveProductModal() {
        this.isRemoveProductModalOpen = false;
    },
    setActiveProduct(product: IProduct) {
        this.activeProduct = product;
    },
});
