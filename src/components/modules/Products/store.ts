import { reactive } from 'vue';

export const store = reactive({
    isCreateProductModalOpen: false,
    openCreateProductModal() {
        this.isCreateProductModalOpen = true;
    },
    closeCreateProductModal() {
        this.isCreateProductModalOpen = false;
    },
});
