<template>
    <TableComponent
        :head="['Nazwa', 'Cena', 'Ilość', 'Wartość razem', 'Akcje']"
    >
        <tr :key="item.id" v-for="item in data" class="hover">
            <td>{{ item.name }}</td>
            <td>{{ item.price.toFixed(2) }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
                <div class="flex gap-2">
                    <button
                        class="text-error hover:text-opacity-80"
                        title="Usuń produkt"
                        @click="() => handleRemoveClick(item)"
                    >
                        <TrashIcon width="20" height="20" />
                    </button>
                    <button
                        class="text-accent hover:text-opacity-80"
                        title="Edytuj produkt"
                        @click="() => handleUpdateClick(item)"
                    >
                        <PencilIcon width="20" height="20" />
                    </button>
                    <RouterLink
                        class="text-info hover:text-opacity-80"
                        title="Szczegóły produktu"
                        :to="{ name: 'product', params: { id: item.id } }"
                    >
                        <LinkIcon width="16" height="16" />
                    </RouterLink>
                </div>
            </td>
        </tr>
    </TableComponent>
    <BasicModalView
        :isOpen="store.isRemoveProductModalOpen && !!store.activeProduct"
        :title="`Usuwanie ${store.activeProduct?.name}`"
        :description="`Czy na pewno chcesz usunąć <strong>${store.activeProduct?.name}</strong>?`"
        :isLoading="isLoading"
        @onCloseModal="handleCloseModal"
        @onAccept="handleRemove"
    />
</template>

<script setup lang="ts">
import { IProduct, IProductsResponse } from '@/services/api/types/product';
import TableComponent from '@components/views/TableComponent.vue';
import TrashIcon from '@assets/icons/trash.svg';
import PencilIcon from '@assets/icons/pencil.svg';
import LinkIcon from '@assets/icons/link.svg';
import BasicModalView from '@components/views/Modals/BasicModalView.vue';
import useProductDelete from '@/services/api/composables/useProductDelete';
import { store } from '@components/modules/Products/store';

defineProps<{ data: IProductsResponse['data'] }>();

const { mutate: removeProduct, isLoading } = useProductDelete();

const handleRemoveClick = (value: IProduct) => {
    store.setActiveProduct(value);
    store.openRemoveProductModal();
};

const handleUpdateClick = (value: IProduct) => {
    store.setActiveProduct(value);
    store.openModifyProductModal();
};

const handleCloseModal = () => {
    store.closeRemoveProductModal();
};

const handleRemove = () => {
    if (store.activeProduct) {
        removeProduct(store.activeProduct.id, {
            onSuccess() {
                handleCloseModal();
            },
        });
    }
};
</script>

<script lang="ts">
export default {
    name: 'TableView',
};
</script>
